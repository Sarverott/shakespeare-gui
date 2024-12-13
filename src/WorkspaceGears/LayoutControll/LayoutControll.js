import ContextMenu from "../../UserInterface/ContextMenu/_controller.js";
import MainWorkspace from "../../UserInterface/MainWorkspace/_controller.js";
import PresentationScreen from "../../UserInterface/PresentationScreen/_controller.js";
import HeaderNavbar from "../../UserInterface/HeaderNavbar/_controller.js";
import Loading from "../../UserInterface/Loading/_controller.js";

class LayoutControll {
  constructor() {
    this.ContextMenu = new ContextMenu();
    this.MainWorkspace = new MainWorkspace();
    //this.PresentationScreen = new PresentationScreen();
    //this.HeaderNavbar = new HeaderNavbar();
    this.Loading = new Loading();
  }
}

export default LayoutControll;
