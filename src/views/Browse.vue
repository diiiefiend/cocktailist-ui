<template>
  <div id="browse">
    <!-- 
      structure:
      main-container component
        map component
        content-block component
      side-container component
        content-block component
     -->
    <div class="left wide">
      <h1 class="capitalize">Heat Map</h1>
      <div class="map-tip">click marker to zoom</div>

      <div id="sticky-trigger"></div>
      <div id="sticky-cont">
        <div class="box" id="sticky">
          <div id="bar-map" class="wide-map"></div>
        </div>
      </div>

      <div class="box">
        <h2>Latest additions</h2>
        <ul class="category-show-list clearfix"></ul>
      </div>
    </div>

    <div class="rule-right"></div>
    <div class="right bar"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>
