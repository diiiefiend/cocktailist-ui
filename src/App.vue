<template>
  <div id="app main">
    <Header msg="test" />

    <div id="content">
      <div id="js-main" class="container clearfix">
        <router-view />
      </div>
    </div>

    <Footer msg="test" />
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
