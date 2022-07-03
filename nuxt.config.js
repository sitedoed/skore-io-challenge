export default {
mode: 'universal',
/*
  ** Headers of the page
  */
head: {
  title: process.env.npm_package_name || '',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
},
// Modules: https://go.nuxtjs.dev/config-modules
modules: [
// https://go.nuxtjs.dev/axios
'@nuxtjs/apollo',
],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
// Apollo configuration
apollo: {
clientConfigs: {
    default: {
    httpEndpoint: 'https://us-central1-challenge-334613.cloudfunctions.net/api/graphql',
    },
},
}
}