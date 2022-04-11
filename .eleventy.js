const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/portfolio-items");
  eleventyConfig.addPassthroughCopy("./src/script");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
