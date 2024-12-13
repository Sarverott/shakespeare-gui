import { useId, provide, reactive } from "vue";

class Controller {
  static ID = null;

  constructor() {
    this.constructor.ID = useId();
    this.ID = this.constructor.ID;
    provide(this.constructor.name + "Controll", this);
    this.constructor.provide = this.constructor.name + "Controll";
    this.constructor.SELF = this;
    this.SELF = this.constructor;
    console.info(this.constructor.name, "init-class", this.constructor.provide);
  }
}

export default Controller;
