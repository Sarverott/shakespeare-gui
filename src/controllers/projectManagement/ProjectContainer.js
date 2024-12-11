import git from "isomorphic-git";
import http from "isomorphic-git/http/web";
import LightningFS from "@isomorphic-git/lightning-fs";

class DraftItem {
  static idFactorialCounter = 0;
  static newId() {
    return DraftItem.idFactorialCounter++;
  }
  constructor(title) {
    this.id = DraftItem.newId();
    this.title = title;
  }
}

class ReleasersPage extends DraftItem {
  constructor() {
    super();
    this.id;
  }
}

class ChapterSegment extends DraftItem {}

class BookContainer extends DraftItem {}
