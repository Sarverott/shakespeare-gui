import GUI_PLUGIN from "../../main";

//import { useUmoEditor } from "@umoteam/editor";

import { createApp } from "vue";

import App from "./_approot.vue";

const app = createApp(App);

app.use(GUI_PLUGIN, {
  view: "webapp",
  darkmode: true,
  commandNamespace: {
    shutdown: () => {
      if (
        window.confirm(
          "Are you sure that you want to quit? Your progress will be keeped in cache, but better to ensure that you can access it later without wiping all your work"
        )
      ) {
        window.close();
      }
    },
  },
});

app.mount("#app");
