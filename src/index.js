const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addVariant }) {
    addVariant('scrollbar', '&::-webkit-scrollbar')
    addVariant('scroll-button', '&::-webkit-scrollbar-button')
    addVariant('scroll-thumb', '&::-webkit-scrollbar-thumb')
    addVariant('scroll-track', '$::-webkit-scrollbar-track')
    addVariant('scroll-piece', '$::-webkit-scrollbar-track-piece')
    addVariant('scroll-corner', '$::-webkit-scrollbar-corner')
    addVariant('scroll-resizer', '$::-webkit-scrollbar-resizer')
})