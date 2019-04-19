
{{#if_eq with_style 'Less'}}
const withLess = require('@zeit/next-less')
{{/if_eq}}
{{#withCss}}
const withCss = require('@zeit/next-css')
{{/withCss}}

{{#withTypescript}}
const withTypescript = require('@zeit/next-typescript')
{{/withTypescript}}

// module.exports = withTypescript(withLess())
module.exports = {{configeach configs}}