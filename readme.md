# Tailwind pseudo scrollbar plugin

Customize your scrollbar from tailwind directly.

## Installation

    yarn add -D @aumirza/tailwind-pseudo-scrollbar

or

    npm install --save-dev @aumirza/tailwind-pseudo-scrollbar

Add plugin in your Tailwind config file.

    plugins: [
        // ...
        require('@aumirza/tailwind-pseudo-scrollbar'),
    ],

## Usage

This plugin is very easy to use. It adds

    scrollbar: for '::-webkit-scrollbar'
    scroll-button: for '::-webkit-scrollbar-button'
    scroll-thumb: for '::-webkit-scrollbar-thumb'
    scroll-track: for '::-webkit-scrollbar-track'
    scroll-piece: for '::-webkit-scrollbar-track-piece'
    scroll-corner: for '-webkit-scrollbar-corner'
    scroll-resizer: for '::-webkit-scrollbar-resizer'

## Stacking

you can stack it other variants like `hover:` ,`dark:`, `dark:hover:` ,or with responsive variants like `sm:`,`md:`,`lg:` or `xl:`.

## Example

    <div className="scrollbar:w-3 md:scrollbar:w-5 scrollbar:bg-gray-50 scroll-thumb:bg-slate-300 dark:scroll-thumb:bg-gray-100 hover:scroll-thumb:bg-slate-500 overflow-y-scroll">
    </div>
