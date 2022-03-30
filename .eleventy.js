const htmlmin = require("html-minifier");
const esbuild = require("esbuild");
const now = String(Date.now())

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === "production";

module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    // Opt-out of DOM diffing updates and use page reloads (false works better with tailwindcss, true works smarter with js changes)
    domdiff: false,
    // The starting port number to attempt to use
    port: 8080,
  });

  // Shortcode für versions-Nummer für css und js Endungen
  eleventyConfig.addShortcode('version', function () {
    return now
  })


  // Only minify HTML when in Production
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (isProduction && outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  // Only minify JS when in Production
  if (isProduction) {
    eleventyConfig.on("afterBuild", () => {
      return esbuild.build({
        entryPoints: ["src/js/app.js"],
        outdir: "_site/js",
        minify: isProduction,
        sourcemap: isProduction,
      });
    });
  } else eleventyConfig.addPassthroughCopy("src/js");

  // Copy minified alpine.js from node-folder to _site-Folder
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.min.js": "./js/alpine.js",
  });

  // Watch my js-File for changes
  eleventyConfig.addWatchTarget("src/js/app.js");

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
