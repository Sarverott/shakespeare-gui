//import CarnivalToolboxCaseGadgets from "./carnival-toolbox-case-gadgets.js";

class CommandInterpreter {
  static NAMESPACE = {};

  static loadNamespace(nsObject) {
    for (var i in nsObject) {
      CommandInterpreter.defineCommand(i, nsObject[i]);
    }
  }

  static defineCommand(commandName, commandFunction) {
    CommandInterpreter.NAMESPACE[commandName] = async function (
      args,
      functName = commandName
    ) {
      console.log("CommandInterpreter::callCommand", functName, args);
      commandFunction(...args);
      console.log("CommandInterpreter::callCommand=EXECUTED", functName, args);
    };
  }

  static callCommand(commandName, callArgs) {
    if (CommandInterpreter.NAMESPACE.hasOwnProperty(commandName)) {
      CommandInterpreter.NAMESPACE[commandName](callArgs, commandName);
      return true;
    } else {
      return false;
    }
  }
  static executeScript() {}
}

export default CommandInterpreter;
