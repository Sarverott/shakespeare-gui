<script>
//import bootstrap from "bootstrap";

import PathChain from "./PathChain.vue";

export default {
  data() {
    return {};
  },

  //created() {},
};
</script>

<template>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="contextMenuAside"
    aria-labelledby="contextMenuAside-Label"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="contextMenuAside-Label">
        <PathChain :chain="['home', 'library', 'data']"></PathChain>
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>

    <ul class="list-group">
      <li class="list-group-item">dsadsads</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
      <li class="list-group-item">A fourth item</li>
      <li class="list-group-item">And a fifth one</li>
    </ul>
  </div>
</template>
