<template>
  <div>
    <Header />
    <h1>{{ $route.params.id }}</h1>
  </div>
</template>

<script>
import Header from '../../components/Header.vue';
export default {
    components: { Header }
}
</script>

<style>

</style>>