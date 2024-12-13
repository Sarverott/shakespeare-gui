//import { defineAsyncComponent } from "vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./stylesheets/main.css";
import { createI18n, useI18n } from "vue-i18n";
import ControllersPlugin from "./WorkspaceGears/index.js";
//import vue from "eslint-plugin-vue";

import Layout from "./UserInterface/Layout.vue";

//import MobileLayoutLoader from "./layouts/mobile/_index.js";
//import DesktopLayoutLoader from "./layouts/desktop/_index.js";

export default {
  install: (app, options = {}) => {
    const i18n = createI18n({
      // something vue-i18n options here ...
    });
    app.use(i18n);
    if (!options.hasOwnProperty("view")) {
      options.view = "webapp";
    }
    if (options.hasOwnProperty("darkmode") && options.darkmode) {
      //document.addEventListener("DOMContentLoaded", function () {
      //document.querySelector("html").setAttribute("data-bs-theme", "dark");
      //});
    } else {
      //document.addEventListener("DOMContentLoaded", function () {
      //  document.querySelector("html").removeAttribute("data-bs-theme");
      //});
    }
    app.component("Layout", Layout);
    //app.use(ControllersPlugin, options);
    //app.use(StandardComponents, options);
    //app.component(
    //  "Layout",
    //defineAsyncComponent(() => import("./UserInterface/Layout.vue"))
    //);

    //switch (options.view) {
    //  case "webapp":
    //    app.use(WebappLayoutLoader, options);
    //    break;
    //  case "mobile":
    //    //app.use(MobileLayoutLoader, options);
    //    break;
    //  case "desktop":
    //    //app.use(DesktopLayoutLoader, options);
    //    break;
    //}
  },
};
