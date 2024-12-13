import Controller from "@/WorkspaceGears/BaseController";

import contextMenuScafolding from "./_setup.json" assert { type: "json" };

//import { provide, useId, ref, reactive } from "vue";

//import {callCommand} from vue;

//import CommandInterpreter from "@/WorkspaceGears/CommandInterpreter/_index";

//class ContextItem {}

//class ContextDir extends ContextItem {}

//class ContextAction extends ContextItem {}

class ContextPointer {
  constructor(path) {
    this.contextPath = path;
  }
  set contextPath(path) {
    this.chain = path.split("/");
    this.content = ContextMenu.getCurrentMenu(this.chain);
    this.path = path;
  }
  get contextPath() {
    this.chain = this.path.split("/");
    this.content = ContextMenu.getCurrentMenu(this.chain);
    return this.path;
  }
}

class ContextMenu extends Controller {
  static tree = contextMenuScafolding;

  static getPointer() {
    //console.log(ContextMenu.tree);
    if (ContextMenu.pointer === null) {
      // defaulting pointer path
      for (const [key, value] of Object.entries(ContextMenu.tree)) {
        if (value instanceof Object && value !== null) {
          ContextMenu.pointer = new ContextPointer(key);
          return ContextMenu.pointer;
        }
      }
      if (ContextMenu.pointer === null)
        throw "configuration file broken - _setup.json has no default startpoint";
    }
    return ContextMenu.pointer;
  }

  static get path() {
    return ContextMenu.getPointer().contextPath;
  }
  static get chain() {
    ContextMenu.getPointer().contextPath;
    return ContextMenu.pointer.chain;
  }
  static get content() {
    ContextMenu.getPointer().contextPath;
    return ContextMenu.pointer.content;
  }

  static pointer = null;

  static getItemType(item) {
    if (typeof item === "string" || item instanceof String) return "command";
    else if (item instanceof Object && item !== null) return "dir";
    else throw "not declared context menu item's type";
  }

  static getCurrentMenu(chain) {
    var result = ContextMenu.tree;
    var outputArr = [];
    for (var i of chain) {
      if (result.hasOwnProperty(i)) {
        result = result[i];
      } else break;
    }
    for (var i in result) {
      outputArr.push({
        type: ContextMenu.getItemType(result[i]),
        name: i,
      });
    }
    //console.log(outputArr);
    return outputArr;
    //return Object.keys(result);
  }

  static goToPath(newpath) {
    ContextMenu.pointer.contextPath = newpath;
  }

  static async executeCommand(openpath, commandCaller) {
    var result = ContextMenu.tree;
    var args = openpath.split("/");
    var index = 0;
    for (var i of args) {
      if (typeof result === "string" || result instanceof String) {
        args = args.slice(index);
        commandCaller(result, args);
      } else if (result.hasOwnProperty(i)) {
        index++;
        result = result[i];
      } else break;
    }
    commandCaller(result, []);
  }

  static returnToHome() {
    ContextMenu.pointer = null;
    ContextMenu.getPointer();
  }

  static openContext(openpath, hook) {
    console.log("openContext", openpath);
    ContextMenu.goToPath(openpath);

    console.log("openContext::pointer", ContextMenu.pointer);
    console.log(hook);
    return ContextMenu.pointer;
    //console.log(this.interfaceHook);
  }
  static openItem(openpath, hook, commandCaller) {
    console.log("openItem", openpath);
    console.log(hook);
    ContextMenu.executeCommand(openpath, commandCaller);
    ContextMenu.returnToHome();
    return ContextMenu.pointer;
  }
}

export default ContextMenu;
