<template>
  <div>
    <h1>Line Chart</h1>
    <LineChart :temperatureData="temperatureData" :humidityData="humidityData" :timeData="timeData" />
  </div>
</template>

<script>
import {ref, onMounted} from 'vue';
import LineChart from '../components/LineChart.vue';

export default {
  components: {
    LineChart,
  },
  setup() {
    const temperatureData = ref([]);
    const humidityData = ref([]);
    const timeData = ref([]);
    const maxDataPoints = 20; // 最大数据点数

    const fetchData = () => {
      fetch('http://47.106.252.40:8000/getData')
          .then(response => response.json())
          .then(data => {
            const now = new Date().toLocaleTimeString();




            temperatureData.value.push(data.temperature);
            humidityData.value.push(data.humidity);
            timeData.value.push(now);

            // 保持数组长度不超过 maxDataPoints
            if (temperatureData.value.length > maxDataPoints) {
              temperatureData.value.shift();
              humidityData.value.shift();
              timeData.value.shift();
            }
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    };

    const fetchInterval = 2000; // 每2秒获取一次数据

    onMounted(() => {
      fetchData();
      setInterval(fetchData, fetchInterval);
    });

    return {
      temperatureData,
      humidityData,
      timeData,
    };
  }
};
</script>
