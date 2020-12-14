<template>
  <canvas id="scatter-chart-container" height="200" width="200"></canvas>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Chart from "chart.js";
import "chartjs-plugin-annotation";
import { ChartData } from "@/models";

const tickColor = "#154C38";
const labelFontOptions = {
  fontFamily: "'LibreBaskerville', serif",
  fontSize: 10,
  fontColor: tickColor
};

const tickOptions = {
  scaleLabel: labelFontOptions,
  position: "bottom",
  type: "linear",
  ticks: {
    ...labelFontOptions,
    suggestedMin: 0,
    suggestedMax: 10,
    stepSize: 1,
    display: false
  }
};

const drinkAnnotationLabels = {
  enabled: true,
  backgroundColor: "rgba(0, 0, 0, 0)",
  ...labelFontOptions
};

const drinkAnnotations = [
  {
    type: "line",
    mode: "vertical",
    id: "traditional-label",
    scaleID: "x-axis-0",
    value: 5,
    borderColor: tickColor,
    borderWidth: 2,
    label: {
      ...drinkAnnotationLabels,
      content: "traditional",
      position: "bottom",
      xAdjust: -35,
      yAdjust: 0
    }
  },
  {
    type: "line",
    mode: "vertical",
    id: "innovative-label",
    scaleID: "x-axis-0",
    value: 5,
    borderColor: tickColor,
    borderWidth: 0,
    label: {
      ...drinkAnnotationLabels,
      content: "innovative",
      position: "top",
      xAdjust: -35,
      yAdjust: 0
    }
  },
  {
    type: "line",
    mode: "horizontal",
    id: "refreshing-label",
    scaleID: "y-axis-0",
    value: 5,
    borderColor: tickColor,
    borderWidth: 2,
    label: {
      ...drinkAnnotationLabels,
      content: "refreshing",
      position: "left",
      xAdjust: 0,
      yAdjust: 10
    }
  },
  {
    type: "line",
    mode: "horizontal",
    id: "spirited-label",
    scaleID: "y-axis-0",
    value: 5,
    borderColor: tickColor,
    borderWidth: 0,
    label: {
      ...drinkAnnotationLabels,
      content: "spirited",
      position: "right",
      xAdjust: 0,
      yAdjust: 10
    }
  }
];

function renderChart(
  data: ChartData,
  dataLabel?: string,
  xLabel?: string,
  yLabel?: string,
  isDrinkStats = false
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
          borderColor: tickColor,
          pointStyle: "crossRot",
          pointRadius: 10,
          hoverRadius: 10
        }
      ]
    },
    options: {
      annotation: {
        drawTime: "afterDatasetsDraw",
        annotations: isDrinkStats ? drinkAnnotations : []
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
            id: "x-axis-0",
            scaleLabel: {
              ...tickOptions.scaleLabel,
              display: !!xLabel && !isDrinkStats,
              labelString: xLabel
            },
            gridLines: {
              display: true
            }
          }
        ],
        yAxes: [
          {
            ...tickOptions,
            id: "y-axis-0",
            scaleLabel: {
              ...tickOptions.scaleLabel,
              display: !!yLabel && !isDrinkStats,
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
  @Prop({ default: false }) private isDrinkStats!: boolean;

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
      renderChart(
        chartData,
        label,
        this.xLabel,
        this.yLabel,
        this.isDrinkStats
      );
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/components/scatter-chart.scss";
</style>
