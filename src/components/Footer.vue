<template>
  <footer class="grid">
    <ul class="credits">
      <li>
        <a href="http://github.com/diiiefiend/cocktailist-ui" target="_blank">
          repo
        </a>
      </li>
      <li>
        <a href="http://projects.lukehaas.me/css-loaders" target="_blank">
          loader
        </a>
        |
        <a href="https://thenounproject.com/" target="_blank">
          vector
        </a>
      </li>
    </ul>
    <div class="quicklinks">
      <a href="javascript:void(0);" class="toplink scrollToTop">back to top?</a>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  // @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/footer.scss";
</style>
