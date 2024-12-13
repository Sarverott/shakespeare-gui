import CommandInterpreter from "./CommandInterpreter/_index.js";

export default {
  install: (app, options) => {
    app.use(CommandInterpreter, options);

    // Plugin code goes here
  },
};
