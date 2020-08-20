<template>
  <header class="grid">
    <div id="logo">
      <a href="/"><img src="/images/deco-logo.png" alt="cocktailist"/></a>
    </div>
    <nav>
      <li><router-link to="/" class="active">Cocktails</router-link></li>
      <li><router-link to="/">Activity</router-link></li>
      <li><router-link to="/">Lists</router-link></li>
      <li><router-link to="/">Data</router-link></li>
      <li><router-link to="/">Login</router-link></li>
    </nav>
  </header>
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
@import "@/assets/styles/components/header.scss";
</style>
