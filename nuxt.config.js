export default {
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