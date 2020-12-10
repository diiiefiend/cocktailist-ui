<template>
  <canvas id="scatter-chart-container" height="200" width="200"></canvas>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Chart from "chart.js";

function renderChart() {
  // chart.js stuff
  const ctx = document.getElementById("scatter-chart-container");

  // eslint-disable-next-line
  const scatterChart = new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Drink Analytics",
          data: [
            {
              x: -10,
              y: 0
            }
          ]
        }
      ]
    },
    options: {
      scales: {
        xAxes: [
          {
            type: "linear",
            position: "bottom"
          }
        ]
      }
    }
  });
}

@Component
export default class ScatterChart extends Vue {
  @Prop() private xValues!: number[];
  @Prop() private yValues!: number[];
  @Prop() private xLegend!: string;
  @Prop() private yLegend!: string;
  @Prop({ default: false }) private showHeading!: boolean;

  mounted() {
    this.$nextTick(() => {
      // Code that will run only after the
      // entire view has been rendered
      renderChart();
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/scatter-chart.scss";
</style>
