import Controller from "@/WorkspaceGears/BaseController.js";

class Loading extends Controller {
  static showmode = false;
  get showmode() {
    return Loading.showmode;
  }
}

export default Loading;
