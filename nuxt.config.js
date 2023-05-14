  export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'admin',
      meta: [{charset: 'utf-8'}, {name: 'viewport', content: 'width=device-width, initial-scale=1'}, {
        hid: 'description', name: 'description', content: ''
      }, {name: 'format-detection', content: 'telephone=no'},],
      link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/scss/global.scss', '~/assets/scss/form--custom-v1.scss', '~/assets/scss/font-config.scss', 'bootstrap/dist/css/bootstrap.css', '~/assets/scss/icon-config.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{
      src: '~/plugins/aos.client.js', ssr: true
    }, {
      src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client"
    },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [// https://go.nuxtjs.dev/axios
      '@nuxtjs/axios', // https://go.nuxtjs.dev/pwa
      '@nuxtjs/pwa',
      '@nuxtjs/vuetify',
      '@nuxtjs/firebase',
      'vue-toastification/nuxt',

    ],
    firebase: {
      config: {
        apiKey: "AIzaSyC4w4cRJUiLo9DMdibkPTcHf6_7qn5w7uQ",
        authDomain: "nuxt-firebase-development.firebaseapp.com",
        projectId: "nuxt-firebase-development",
        storageBucket: "nuxt-firebase-development.appspot.com",
        messagingSenderId: "706366653686",
        appId: "1:706366653686:web:342a20903e613cd2d598d7",
        measurementId: "G-1YYLW4YK8Z"
      },
      services: {
        auth: true,
        firestore: true,
        functions: true,
        storage: true,
        database: true,
        messaging: true,
        performance: true,
        appCheck: true,
        analytics: true,
        remoteConfig: true,
      }
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
      // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
      baseURL: 'http://127.0.0.1:8080/api',
    },


    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
      manifest: {
        lang: 'en',
      },
    },
    store: {
      modules: {
        auth: '~/store/auth.js'
      }
    },
    toast: {

    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
  }
