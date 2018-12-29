module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("uikit");
    return {
        templateFormats: [
            "md",
            "liquid",
            "njk",
            "html"
        ],
        pathPrefix: "/"

    }
}