<template>
  <div class="gauge-container">
    <div ref="temperatureGauge" style="width: 50%; height: 400px;"></div>
    <div ref="humidityGauge" style="width: 50%; height: 400px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  props: ['temperature', 'humidity'],
  mounted() {
    this.renderGauges();
  },
  watch: {
    temperature() {
      this.renderGauges();
    },
    humidity() {
      this.renderGauges();
    },
  },
  methods: {
    renderGauges() {
      const temperatureGauge = echarts.init(this.$refs.temperatureGauge);
      const humidityGauge = echarts.init(this.$refs.humidityGauge);

      const gaugeOption = (title, value, max) => ({
        title: {
          text: title,
          left: 'center',
          top: 20,
          textStyle: {
            color: '#333',
            fontSize: 20,
          },
        },
        series: [
          {
            name: title,
            type: 'gauge',
            max: max,
            detail: {
              formatter: '{value}',
              fontSize: 20,
            },
            axisLine: {
              lineStyle: {
                width: 30,
                color: [
                  [0.3, '#67e0e3'],
                  [0.7, '#37a2da'],
                  [1, '#fd666d'],
                ],
              },
            },
            axisTick: {
              length: 15,
              lineStyle: {
                color: 'auto',
              },
            },
            splitLine: {
              length: 25,
              lineStyle: {
                color: 'auto',
              },
            },
            pointer: {
              width: 5,
            },
            title: {
              fontSize: 14,
            },
            data: [{ value: value, name: title }],
          },
        ],
      });

      temperatureGauge.setOption(gaugeOption('Temperature', this.temperature, 50));
      humidityGauge.setOption(gaugeOption('Humidity', this.humidity, 100));
    },
  },
};
</script>

<style>
.gauge-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>