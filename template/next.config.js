
{{#if_eq with_style 'Less'}}
const withLess = require('@zeit/next-less')
{{/if_eq}}
{{#if_eq with_style 'Sass'}}
const withSass = require('@zeit/next-sass')
{{/if_eq}}
{{#withCss}}
const withCss = require('@zeit/next-css')
{{/withCss}}

{{#withTypescript}}
const withTypescript = require('@zeit/next-typescript')
{{/withTypescript}}

module.exports = {{configeach configs}}