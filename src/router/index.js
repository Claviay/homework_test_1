// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LineChartView from '../views/LineChartView.vue';
import GaugeChartView from '../views/GaugeChartView.vue';

const routes = [
  { path: '/', redirect: '/line-chart' },
  { path: '/line-chart', component: LineChartView },
  { path: '/gauge-chart', component: GaugeChartView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
