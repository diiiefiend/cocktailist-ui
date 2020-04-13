<template>
  <div id="footer">
    <div class="container clearfix">
      <p>
        Made by
        <a href="http://github.com/diiiefiend" target="_blank">Ariel Hou</a
        >.<br />
        <span class="subtext"
          >Drink images:
          <a href="http://yelp.com" target="_blank">Yelp</a>/myself, vector:
          <a href="https://thenounproject.com/" target="_blank"
            >The Noun Project</a
          >, drink info: respective establishments, CSS loader:
          <a href="http://projects.lukehaas.me/css-loaders/" target="_blank"
            >Luke Hass</a
          >.</span
        >
      </p>
      <a href="javascript:void(0);" class="toplink scrollToTop">top</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/footer.scss";
</style>
