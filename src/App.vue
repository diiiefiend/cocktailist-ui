<template>
  <div id="app">
    <Header />

    <main id="content">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";
</style>
