<template>
  <div class="container">
    <div class="">
      <h1>Skore-io/Challenge Home</h1>
      <div class="">
        <ul>
          <li v-for="content in contents" :key="content.id" class="py-2">
            <nuxt-link :to="content.id" class="">
              {{ content.title }}:
            </nuxt-link>
          </li>
        </ul>
        <div class="">
          <nuxt-child :key="$route.params.id"></nuxt-child>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'IndexPage',
  apollo: {
    contents: gql`
      query getContent {
        contents {
          id
          title
          description
          type
          url
          embeddable
          allow_download
          created_at
          updated_at
          __typename
        }
      }
    `,
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
