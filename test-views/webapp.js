import GUI_PLUGIN from "../src/main";

import { createApp } from "vue";

import App from "./App.vue";

const app = createApp(App);

app.use(GUI_PLUGIN, { view: "webapp", darkmode: true });

app.mount("#app");
