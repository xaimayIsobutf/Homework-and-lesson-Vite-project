import { createRouter, createWebHistory } from "vue-router";
import Test from "../views/Test.vue";
import User from "../views/User.vue";
import Test2 from "..//views/Test2.vue";
import ConcertComponent from '../components/ConcertConponent.vue';

const routes = [
    { path: '/', component: Test },
    { path: '/user',component: User },
    { path: '/test2',component: Test2},
    { path: '/concert',component: ConcertComponent},
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router