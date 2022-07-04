<template>
  <div>
    <Header />
    <div class="container">
      <div class="item">
        <section>
          <article
            v-if="getContent"
          >
            <h1>Título: {{ getContent.title }} </h1>
            <p><strong>Descrição: </strong>{{ getContent.description }}</p>
            <img v-if="getContent.type ==='image'" :src="getContent.url" :alt="getContent.type" width="50%">
            <iframe v-if="getContent.type ==='video'" width="560" height="315" 
              :src="getContent.url" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
              <a v-if="getContent.type ==='link' || getContent.type ==='document'" :href="getContent.url" target="_blank" rel="noopener">Link Externo</a>
            <ul>
              <li><strong>Tipo de conteúdo: </strong> {{ getContent.type }}</li>
              <li><strong>Url:</strong> {{ getContent.url }}</li>
              <li><strong>Embeddable:</strong> {{ getContent.embeddable }}</li>
              <li><strong>Download?</strong> {{ getContent.allow_download }}</li>
              <li><strong>Criado em:</strong> {{ getContent.created_at }}</li>
              <li><strong>Atualizado em:</strong> {{ getContent.updated_at }}</li>
              <li><strong>Typename</strong> {{ getContent.__typename }}</li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Header from '../../components/Header.vue'
import '../../assets/css/main.css' 

export default {
    data(){
      return {
        contentId: "627150a0-c0dc-45d5-8d4c-f8a69e38b3cf"
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
            //id: this.contentId
            id: this.$route.params.id
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