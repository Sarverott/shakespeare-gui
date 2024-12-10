import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./stylesheets/main.css";

import ControllersPlugin from "./controllers/index.js";

import WebappLayoutLoader from "./layouts/webapp/_index.js";
//import MobileLayoutLoader from "./layouts/mobile/_index.js";
//import DesktopLayoutLoader from "./layouts/desktop/_index.js";

export default {
  install: (app, options = {}) => {
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

    //app.use(ControllersPlugin, options);
    //app.use(StandardComponents, options);

    switch (options.view) {
      case "webapp":
        app.use(WebappLayoutLoader, options);
        break;
      case "mobile":
        //app.use(MobileLayoutLoader, options);
        break;
      case "desktop":
        //app.use(DesktopLayoutLoader, options);
        break;
    }
  },
};
