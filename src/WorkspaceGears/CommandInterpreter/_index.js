import CommandInterpreter from "./CommandInterpreter";

export default {
  install: (app, options = {}) => {
    //var tmpApp = app;
    if (options.hasOwnProperty("commandNamespace")) {
      CommandInterpreter.loadNamespace(options.commandNamespace);
    }
    app.config.globalProperties.$callCommand = (command, args) => {
      return CommandInterpreter.callCommand(command, args);
    };
    //app.provide('callCommand')
    app.config.globalProperties.$defineCommand = (command, funct) => {
      CommandInterpreter.defineCommand(command, funct);
    };
    app.config.globalProperties.$loadNamespace = (namespace) => {
      CommandInterpreter.loadNamespace(namespace);
    };
  },
};
