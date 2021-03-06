//vue.config.js
const path = require('path')

module.exports = {
    // chainWebpack: config => {
    //     const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    //     types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    // },

    css: {
        loaderOptions: {
            scss: {
                prependData: `
                     @import "~@/styles/global.scss";
        `
            }
        }
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: []
        }
    }
}
//
// function addStyleResource(rule) {
//     rule.use('style-resource')
//         .loader('style-resources-loader')
//         .options({
//             patterns: [
//                 path.resolve(__dirname, 'src/styles/global.scss'),
//             ],
//         })
// }
