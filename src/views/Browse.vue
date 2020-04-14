<template>
  <div id="browse" class="grid-container">
    <!-- 
      structure:
      layout-container component
        map component
        content-block component
      layout-container component
        content-block component
     -->
    <layout-container :is-left-side="true" :width="2">
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
    </layout-container>

    <!-- <div class="rule-right"></div> -->
    <layout-container :is-left-side="false" :width="1">
      <div class="box">
        <h1>Browse by:</h1>
      </div>
    </layout-container>
  </div>
</template>

<script>
// @ is an alias to /src
import LayoutContainer from "@/components/LayoutContainer.vue";

export default {
  name: "Browse",
  components: {
    LayoutContainer
  }
};
</script>
