<template>
  <div class="p-8">
    <h1 class="">Skore-io Challenge</h1>
    <div class="">
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
            :to="`/${item.id}`"
            class=""
          >
            Read more
          </NuxtLink>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

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
}
</script>