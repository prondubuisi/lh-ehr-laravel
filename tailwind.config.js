const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: [
        './resources/views/**/*.blade.php',
        './resources/css/**/*.css',
    ],
    theme: {
        extend: {},
        theme: {
            colors: {
                orange: '#f59031'
            },
            container: {
                padding: '10rem',
            },
        },
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within', 'disabled'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within'],
        fontFamily: ['responsive', 'hover', 'focus'],
        zIndex: ['responsive', 'focus'],
        gradients: ['responsive', 'hover'],
        spinner: ['responsive'],
        animation: ['responsive', 'motion-safe', 'motion-reduce'],
        transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
        outline: ['responsive', 'focus', 'hover', 'active'],
        float: ['responsive', 'direction'],
        margin: ['responsive', 'direction'],
        padding: ['responsive', 'direction'],
    },
    plugins: [
        require('@tailwindcss/ui'),
        require('autoprefixer'),
        require('tailwindcss-dir')(),
        plugin(function ({ addComponents }) {
            const buttons = {
                '.btn': {
                    padding: '.5rem 1rem',
                    borderRadius: '.25rem',
                    fontWeight: '600',
                },
                '.btn-blue': {
                    backgroundColor: '#3490dc',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#2779bd'
                    },
                },
                '.btn-red': {
                    backgroundColor: '#e3342f',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#cc1f1a'
                    },
                },
            };
            addComponents(buttons)
        })
    ]
};
