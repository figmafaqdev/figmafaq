module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("site", {
    url: "https://figmafaq.com",
    name: "FigmaFAQ"
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
