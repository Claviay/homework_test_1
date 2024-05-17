import Vue from 'vue';
import VueRouter from 'vue-router';
import LineChartView from '@/views/LineChartView.vue';
import GaugeChartView from '@/views/GaugeChartView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LineChart',
    component: LineChartView,
  },
  {
    path: '/gauge',
    name: 'GaugeChart',
    component: GaugeChartView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
