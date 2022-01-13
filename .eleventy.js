const {
  ElventyServerLessBundle,
  EleventyServerlessBundlerPlugin,
} = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "onDemand", // name this for the type of rendering you are going to drive with this
    functionsDir: "./netlify/functions/",
    inputDir: "./src",
  });

  return {
    dir: {
      input: "./src",
    },
  };
};
