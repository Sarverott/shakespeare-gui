<script setup>
//import bootstrap from "bootstrap";

import { inject, useId, reactive, watch, computed, provide } from "vue";

import CONTROLLER from "./_controller";

//const CONTROLLER = new ContextMenuControll();

import PathChain from "./PathChain.vue";
import PathChainItem from "./PathChainItem.vue";

import PathContent from "./PathContent.vue";
import PathContentItem from "./PathContentItem.vue";

//const CONTROLLER = inject("ContextMenuControll");

//console.log("dupa");
//console.log(CONTROLLER);

//const refchain = computed(() => CONTROLLER.SELF.getPointer().chain);
//const refcontent = computed(() => CONTROLLER.SELF.getPointer().content);

//console.log(pointer);

CONTROLLER.getPointer();

const asideMenuHeaderID = useId();

function openContextLive(...arg) {
  var result = CONTROLLER.openContext(...arg);
  current.path = result.path;
  current.chain = result.chain;
  current.content = result.content;
  //refreshFactor++;
  //shuffleKeys();
}
function openItemLive(...arg) {
  var result = CONTROLLER.openItem(...arg);
  current.path = result.path;
  current.chain = result.chain;
  current.content = result.content;
  //refreshFactor++;
  //shuffleKeys();
}

var current = reactive({
  path: CONTROLLER.pointer.path,
  chain: CONTROLLER.pointer.chain,
  content: CONTROLLER.pointer.content,
});

//var refreshFactor = ref(1);
/*
var chain = computed(() => {
  if (refreshFactor % 2) {
    return CONTROLLER.chain;
    refreshFactor++;
  } else {
    return CONTROLLER.chain;
  }
});
var content = computed(() => {
  if (refreshFactor % 2) {
    return CONTROLLER.content;
    refreshFactor++;
  } else {
    return CONTROLLER.content;
  }
});

function loadKey(key) {
  if ((!key) in keyTable) {
    keyTable[key] = parseInt(Math.random() * 256 * 256 * 256);
  }
  return key + keyTable[key];
}
  */
//function shuffleKeys() {
//  for (var i in keyTable) {
//    keyTable[i] = parseInt(Math.random() * 256 * 256 * 256);
//  }
//}

//const keyTable = ref([]);

function mergeContextPath(fullchain, index) {
  return fullchain.slice(0, index + 1).join("/");
}
function getFullPath(dirChain, itemname) {
  return dirChain.concat([itemname]).join("/");
}
</script>

<template>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    :id="CONTROLLER.ID"
    :aria-labelledby="asideMenuHeaderID"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" :id="asideMenuHeaderID">
        <PathChain :box-id="CONTROLLER.ID">
          <PathChainItem
            :key="useId()"
            v-for="(item, index) in current.chain"
            :aside-id="CONTROLLER.ID"
            :item-path="mergeContextPath(current.chain, index)"
            :item-active="current.chain.length - 1 == index"
            @open-context="openContextLive"
          >
            {{ item }}
          </PathChainItem>
        </PathChain>
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <PathContent>
      <PathContentItem
        :key="useId()"
        v-for="(item, index) in current.content"
        :item-path="getFullPath(current.chain, item.name)"
        :item-type="item.type"
        :aside-id="CONTROLLER.ID"
        @open-context="openContextLive"
        @open-item="openItemLive"
      >
        {{ item.name }}
      </PathContentItem>
    </PathContent>
  </div>
</template>
