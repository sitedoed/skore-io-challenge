<template>
  <div class="wrapper">
    <Header />
    <div class="container">
      <div class="row">
         <h1 class="">Skore-io Challenge</h1>
         <nuxt-child></nuxt-child>
      </div>
      <div class="row">
        <section>
          <article
            v-for="item in contents"
            :key="item.id"
            class=""
          >
            <h2 class="font-bold">{{ item.title }}</h2>
            <div class="">
              <p>{{ item.description }}</p>
              <ul>
                <li><strong>Tipo: </strong> {{ item.type }}</li>
                <li>Link: {{ item.link }}</li>
                <li>Embeddable: {{ item.embeddable }}</li>
                <li>Download: {{ item.allow_download }}</li>
                <li>Data de criação: {{ item.created_at }}</li>
                <li>Última atualização: {{ item.updated_at }}</li>
              </ul>
            </div>
            <NuxtLink
              :to="`/read_more/${item.id}`"
              class=""
            >
              Read more
            </NuxtLink>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Header from '../components/Header.vue'
import '../assets/css/main.css' 

export default {
    apollo: {
      contents: gql`
        query contents {
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
          }
        }
      `,
    },
    components: { Header }
}
</script>

<style scoped>
  .container{
    margin-top: 120px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
  }
  .row{
    width: 100%;
    padding: 20px;
  }

</style>