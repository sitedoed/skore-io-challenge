<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
     <h2>id_vue na rota index</h2>
    <section>
      <article
        
      >
      <h1>Título: {{ getContent.title }} </h1>
      <p>{{ getContent.description }}</p>

      </article>
    </section>

  </div>
</template>

<script>
import gql from 'graphql-tag'
import Header from '../../components/Header.vue'
import '../../assets/css/main.css' 

export default {
    data(){
      return {
        id: "627150a0-c0dc-45d5-8d4c-f8a69e38b3cf"
      }
    },
    apollo: {
      getContent: {
        query: gql `
          query ($id: String!){
            getContent (id: $id) {
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
        variables() {
          return {
            //id: this.id
            id: this.$route.query.id
          }
        }
      }
    }
  ,
    components: { Header }
}
</script>

<style>

</style>