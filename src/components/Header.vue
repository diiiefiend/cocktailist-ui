<template>
  <div id="header">
    <div class="container clearfix">
      <a href="/"><img src="/images/logo.png" id="logo" alt="cocktailist"/></a>
      <div id="search">
        <input type="text" class="header-search" placeholder="search" />
      </div>
      <div id="user-menu">
        <img src="/images/user.png" alt="user menu" />
        <ul>
          <li><router-link to="/login">Log In</router-link></li>
        </ul>
      </div>
      <ul id="nav">
        <li><router-link to="/">Browse</router-link></li>
        <li><router-link to="/">Feed</router-link></li>
        <li><router-link to="/">Lists</router-link></li>
        <li><router-link to="/">Analytics</router-link></li>
        <li><router-link to="/">Add Entry</router-link></li>
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
