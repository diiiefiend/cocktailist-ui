<template>
  <div id="header">
    <div class="container clearfix">
      <a href="/"><img src="/images/logo.png" id="logo" alt="cocktailist"/></a>
      <div id="search"></div>
      <div id="user-menu">
        <img src="/images/user.png" alt="user menu" />
        <ul></ul>
      </div>
      <ul id="nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/header.scss";
</style>
