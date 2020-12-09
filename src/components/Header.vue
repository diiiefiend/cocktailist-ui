<template>
  <header class="grid">
    <div id="logo">
      <a href="/" @mouseover="hovered = true" @mouseleave="hovered = false">
        <img alt="cocktailist" :src="[hovered ? imgHover : imgStandard]" />
      </a>
    </div>
    <nav>
      <li><router-link to="/" class="active">Cocktails</router-link></li>
      <li><router-link to="/">Activity</router-link></li>
      <li><router-link to="/">Lists</router-link></li>
      <li><router-link to="/">Data</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  imgStandard = "/images/deco-logo.png";
  imgHover = "/images/deco-logo-hover.png";

  data() {
    return {
      hovered: false
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/header.scss";
</style>
