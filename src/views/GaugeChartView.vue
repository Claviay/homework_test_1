<!-- src/views/GaugeChartView.vue -->
<template>
  <div>
    <h1>Gauge Chart</h1>
    <GaugeChart :temperature="temperature" :humidity="humidity" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import GaugeChart from '../components/GaugeChart.vue';

export default {
  components: {
    GaugeChart,
  },
  setup() {
    const temperature = ref(0);
    const humidity = ref(0);

    const fetchData = () => {
      fetch('http://47.106.252.40:8000/getData')
        .then(response => response.json())
        .then(data => {
          temperature.value = data.temperature;
          humidity.value = data.humidity;
        });
    };
    const fetchInterval = 1000;
          // 启动定时器，定时获取数据
    onMounted(()=>{
      fetchData();

      setInterval(fetchData, fetchInterval);
    });

    return {
      temperature,
      humidity,
    };
  },
};
</script>
