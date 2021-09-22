<template>
  <div class="body">
    <Header/>
    <main>
      <nuxt/>
    </main>
  </div>
</template>

<script>
  import Header from "@/components/Header"

  export default {
    components: {
      Header
    }
  }
</script>

<style>
  .body {
    background-color: #F5FFFA;
    height: 100vh;
  }
</style>
