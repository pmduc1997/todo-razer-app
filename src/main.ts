import { createApp } from "vue";
import App from "./App.vue";
import { VueQueryPlugin } from "vue-query";
import router from "./router";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.css";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin);
app.use(pinia);

app.mount("#app");
