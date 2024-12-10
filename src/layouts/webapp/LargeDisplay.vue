<script setup>
import MainBody from "@/components/base/MainBody.vue";
import LoadingScreen from "@/components/base/LoadingScreen.vue";
import StartScreen from "@/components/base/StartScreen.vue";
import ContextMenu from "@/components/ContextMenu/_index.vue";
import MicroFooter from "@/components/base/MicroFooter.vue";
import HeaderNavbar from "@/components/HeaderNavbar/_index.vue";

import { provide, reactive, computed, useId } from "vue";

const tree = {
  home: {
    dashboard: 0,
    options: {
      profile: 0,
      sound: 0,
      appearence: 0,
    },
    projects: {
      mobydick: 0,
      guideForExtremists: 0,
    },
    exit: {
      quit: {
        byedoor: 0,
      },
    },
  },
};
var contextPath = reactive({ path: "home" });

const contextPathChain = computed(() => contextPath.path.split("/"));

console.log(contextPathChain);

const contextPathContent = computed(() => {
  var result = tree;
  var outputArr = [];
  for (var i of contextPath.path.split("/")) {
    if (result.hasOwnProperty(i)) {
      result = result[i];
    } else break;
  }
  for (var i in result) {
    outputArr.push({
      type: Number.isInteger(result[i]) ? "file" : "dir",
      name: i,
    });
  }
  console.log(outputArr);
  return outputArr;

  //return Object.keys(result);
});

provide("asideMenuBoxID", useId());

console.log(useId());

function openContext(dirpath) {
  contextPath.path = dirpath;
}
function openItem(item) {
  alert(item);
}

provide("contextPathChain", contextPathChain);
provide("contextPathContent", contextPathContent);
provide("openContext", openContext);
provide("openItem", openItem);
</script>

<template>
  <div class="container-fluid">
    <div>
      <HeaderNavbar></HeaderNavbar>
      <div class="d-flex flex-nowrap">
        <MainBody></MainBody>
        <ContextMenu></ContextMenu>
      </div>
      <MicroFooter></MicroFooter>
    </div>
  </div>
  <LoadingScreen></LoadingScreen>
  <StartScreen></StartScreen>
</template>
