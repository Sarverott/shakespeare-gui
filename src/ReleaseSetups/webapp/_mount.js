import GUI_PLUGIN from "../../main";

import { useUmoEditor } from "@umoteam/editor";

import { createApp } from "vue";

import App from "./_approot.vue";

const app = createApp(App);

app.use(GUI_PLUGIN, { view: "webapp", darkmode: true });

app.mount("#app");
