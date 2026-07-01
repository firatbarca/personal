module.exports = function (eleventyConfig) {
  // ---- Passthrough: static files copied byte-for-byte (design unchanged) ----
  eleventyConfig.addPassthroughCopy({ "src/index.html": "index.html" });
  eleventyConfig.addPassthroughCopy({ "src/solutions": "solutions" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/blog/style.css": "blog/style.css" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  // ---- Filters ----
  eleventyConfig.addFilter("postDate", (d) => {
    const dt = new Date(d);
    if (isNaN(dt)) return "";
    return dt.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
  });
  eleventyConfig.addFilter("readingTime", (html) => {
    const words = String(html).replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  });
  // Calendar date (YYYY-MM-DD) in the author timezone, for sitemap <lastmod> and
  // article structured data. Formatting in Europe/Warsaw (not UTC) matches the
  // publish-gate convention in posts.11tydata.js and avoids a one-day drift.
  eleventyConfig.addFilter("isoDate", (d) => {
    const dt = new Date(d);
    if (isNaN(dt)) return "";
    return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Warsaw" }).format(dt);
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes" },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
