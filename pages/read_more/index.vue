<template>
  <div class="">
    <h1>Read More</h1>
    <nuxt-child />
  </div>  
</template>

<script>
import gql from 'graphql-tag'

export default {

  apollo:  {
    getContent: gql`
      query {
      getContent (id: "5d3bb1f7-0106-4733-aede-6a3c1c7f21c8") {
        id
        title
        description
        type
        url
      }
    }
    `
  }
}
</script>

<style>

</style>