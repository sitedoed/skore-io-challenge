<template>
  <div class="wrapper">
    <Header />
    <div class="container">
        <div class="item">
          <h1 class="">Skore-io Challenge</h1>
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
                  <li><strong>Url:</strong> {{ item.url }}</li>
                  <li><strong>Embeddable:</strong> {{ item.embeddable }}</li>
                  <li><strong>Download:</strong> {{ item.allow_download }}</li>
                  <li><strong>Data de criação:</strong> {{ item.created_at }}</li>
                  <li><strong>Última atualização:</strong> {{ item.updated_at }}</li>
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

<style>
</style>