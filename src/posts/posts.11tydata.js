// Shared data for every post in src/posts/.
// Publishing rule (timezone-safe): a post is published when it is NOT a draft and its
// publish DAY is today or earlier in the author's timezone. Comparing by calendar day
// (not exact UTC time) avoids the "saved local time looks like the future in UTC" bug.
// This is what gives us "drafts" (draft: true) and "scheduled publishing" (a future date).

const AUTHOR_TZ = "Europe/Warsaw";

function todayInTZ() {
  // en-CA formats as YYYY-MM-DD
  return new Intl.DateTimeFormat("en-CA", { timeZone: AUTHOR_TZ }).format(new Date());
}
function postDay(date) {
  // YAML turns date-only values (e.g. "2026-07-05", as Pages CMS writes them) into
  // Date objects, while datetimes without seconds stay strings. Handle both.
  if (date instanceof Date) {
    return new Intl.DateTimeFormat("en-CA", { timeZone: AUTHOR_TZ }).format(date);
  }
  return String(date).slice(0, 10); // calendar-day portion of the front-matter date
}
function isHidden(data) {
  return data.draft === true || postDay(data.date) > todayInTZ();
}

module.exports = {
  layout: "post.njk",
  tags: "posts",
  eleventyComputed: {
    permalink: (data) =>
      isHidden(data) ? false : `/blog/${data.page.fileSlug}/index.html`,
    eleventyExcludeFromCollections: (data) => isHidden(data),
  },
};
