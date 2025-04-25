import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import CountUp from "vue-countup-v3";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000 });
createApp(App).use(router).component("Countup", CountUp).mount("#app");
