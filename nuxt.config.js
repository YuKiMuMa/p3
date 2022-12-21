export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'YuKiMuMa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.ico' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/lazyload.js" }, { src: "~plugins/veeValidate.js" },
    //'~/plugins/vee-validate',
    //'~plugins/lazyload.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
    'nuxt-webfontloader'
  ],

  webfontloader: {
    google: {
      families: ['Lato:400,700', 'Noto+Sans+JP:400,700'] 
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Add exception
    transpile: [
      "vee-validate/dist/rules"
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
