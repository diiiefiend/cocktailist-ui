<template>
  <canvas id="scatter-chart-container" height="200" width="200"></canvas>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Chart from "chart.js";
import * as ChartAnnotation from "chartjs-plugin-annotation";
import { ChartData } from "@/models";

const tickOptions = {
  scaleLabel: {
    fontFamily: "'LibreBaskerville', serif",
    fontSize: 10
  },
  position: "bottom",
  type: "linear",
  ticks: {
    fontFamily: "'LibreBaskerville', serif",
    fontSize: 10,
    suggestedMin: 0,
    suggestedMax: 10,
    stepSize: 1
  }
};

function renderChart(
  data: ChartData,
  dataLabel?: string,
  xLabel?: string,
  yLabel?: string
) {
  // chart.js stuff
  const ctx = document.getElementById(
    "scatter-chart-container"
  ) as HTMLCanvasElement;

  if (!ctx) {
    throw new Error("no scatter chart element");
  }

  // eslint-disable-next-line
  const scatterChart = new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: dataLabel,
          data,
          pointStyle: "crossRot",
          pointRadius: 10,
          borderColor: "rgb(75, 192, 192)"
        }
      ]
    },
    plugins: [ChartAnnotation],
    options: {
      annotation: {
        annotations: [
          {
            drawTime: "afterDatasetsDraw",
            type: "line",
            mode: "horizontal",
            scaleID: "y-axis-0",
            value: 5,
            borderColor: "rgb(0, 0, 0)",
            borderWidth: 4,
            label: {
              backgroundColor: "red",
              content: "Test Label",
              enabled: true
            }
          }
        ]
      },
      legend: {
        display: !!dataLabel
      },
      layout: {
        padding: {
          top: 10,
          left: 5,
          right: 10,
          bottom: 5
        }
      },
      scales: {
        xAxes: [
          {
            ...tickOptions,
            scaleLabel: {
              ...tickOptions.scaleLabel,
              display: !!xLabel,
              labelString: xLabel
            }
          }
        ],
        yAxes: [
          {
            ...tickOptions,
            scaleLabel: {
              ...tickOptions.scaleLabel,
              display: !!yLabel,
              labelString: yLabel
            }
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
  @Prop() private xLabel!: string;
  @Prop() private yLabel!: string;
  @Prop({ default: false }) private showLabel!: boolean;
  @Prop() private label?: string;

  mounted() {
    this.$nextTick(() => {
      // Code that will run only after the entire view has been rendered
      const chartData: ChartData = [];
      this.xValues.forEach((val, i) => {
        chartData.push({
          x: val,
          y: this.yValues[i]
        });
      });

      const label = this.showLabel ? this.label : undefined;
      renderChart(chartData, label, this.xLabel, this.yLabel);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/scatter-chart.scss";
</style>
