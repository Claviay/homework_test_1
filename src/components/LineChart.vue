<!-- src/components/LineChart.vue -->
<template>
  <div ref="lineChart" style="width: 100%; height: 400px;"></div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import * as echarts from 'echarts';

export default {
  props: ['temperatureData', 'humidityData', 'timeData'],
  setup(props) {
    const lineChart = ref(null);

    const renderChart = () => {
      const chart = echarts.init(lineChart.value);
      chart.setOption({
        title: {
          text: 'Temperature and Humidity Over Time',
        },
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: props.timeData, // 使用传入的时间数据
        },
        yAxis: [
          {
            type: 'value',
            name: 'Temperature',
          },
          {
            type: 'value',
            name: 'Humidity',
          },
        ],
        series: [
          {
            name: 'Temperature',
            type: 'line',
            data: props.temperatureData,
          },
          {
            name: 'Humidity',
            type: 'line',
            yAxisIndex: 1,
            data: props.humidityData,
          },
        ],
      });
    };

    watch(
      () => [props.temperatureData, props.humidityData, props.timeData],
      renderChart,
      { deep: true }
    );

    onMounted(renderChart);

    return {
      lineChart,
    };
  },
};
</script>
