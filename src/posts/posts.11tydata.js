// Shared data for every post in src/posts/.
// Drafts and future-dated posts are not written and excluded from collections —
// this is what gives us "drafts" and "scheduled publishing" on a static site.
module.exports = {
  layout: "post.njk",
  tags: "posts",
  eleventyComputed: {
    permalink: (data) => {
      if (data.draft === true) return false;
      if (new Date(data.date) > new Date()) return false;
      return `/blog/${data.page.fileSlug}/index.html`;
    },
    eleventyExcludeFromCollections: (data) =>
      data.draft === true || new Date(data.date) > new Date(),
  },
};
