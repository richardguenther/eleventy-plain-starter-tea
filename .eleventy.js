const now = String(Date.now());
const transforms = require('./utils/transforms.js')

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
  });

  // Watch my js-File for changes
  eleventyConfig.addWatchTarget("src/_assets/scripts/app.js");

    // Copy `static/` to `_site/static`
    eleventyConfig.addPassthroughCopy("src/static");

// Transforms
	Object.keys(transforms).forEach((transformName) => {
		eleventyConfig.addTransform(transformName, transforms[transformName])
	});


  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
