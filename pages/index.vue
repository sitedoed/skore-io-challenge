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
            <p><strong>Tipo: </strong> {{ item.type }}</p>
            <p>Link: {{ item.link }}</p>
            <p>Embeddable: {{ item.embeddable }}</p>
            <p>Download: {{ item.allow_download }}</p>
            <p>Data de criação: {{ item.created_at }}</p>
            <p>Última atualização: {{ item.updated_at }}</p>
          </div>
          <NuxtLink
            :to="`/item/${item.id}`"
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