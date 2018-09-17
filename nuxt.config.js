// const { VuetifyProgressiveModule } = require('vuetify-loader')

module.exports = {
  mode: 'spa',
  generate: {
    routes: [
      '/art/1',
      '/art/2',
      '/art/3',
    ]
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '2018桃園地景藝術節',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '[非官方] 2018桃園地景藝術節活動網站' },
      { hid: 'og:image', property: 'og:image', content: 'https://taoyuanlandart.netlify.com/images/og-image.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: [
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#1ABC9C' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // vue loader
      
      // const vueLoader = config.module.rules.find(r => r.loader === 'vue-loader')
      // if (!vueLoader.options.compilerOptions) {
      //   vueLoader.options.compilerOptions = {}
      // }
      // if (!vueLoader.options.compilerOptions.modules) {
      //   vueLoader.options.compilerOptions.modules = []
      // }
      // vueLoader.options.compilerOptions.modules.push(VuetifyProgressiveModule)

      // vuetify-loader
      // config.module.rules.push({
      //   test: /\.(png|jpe?g|gif)$/,
      //   resourceQuery: /vuetify-preload/,
      //   use: [
      //     'vuetify-loader/progressive-loader',
      //     {
      //       loader: 'url-loader',
      //       options: { limit: 8000 }
      //     }
      //   ]
      // })
    }
  }
}

