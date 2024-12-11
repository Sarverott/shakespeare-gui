<script setup>
import ContextMenu from "./ContextMenu/_index.vue";
import HeaderNavbar from "./HeaderNavbar/_index.vue";
import MainWorkspace from "./MainWorkspace/_index.vue";
import PresentationScreen from "./PresentationScreen/_index.vue";
import Loading from "./Loading/_index.vue";
import StatsFooter from "./StatsFooter/_index.vue";

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
var appstatus = reactive({ loading: false });
provide("contextPathChain", contextPathChain);
provide("contextPathContent", contextPathContent);
provide("openContext", openContext);
provide("openItem", openItem);
</script>

<template>
  <Loading :showmode="appstatus.loading"></Loading>
  <div class="container-fluid">
    <div>
      <HeaderNavbar></HeaderNavbar>
      <div class="d-flex flex-nowrap">
        <MainWorkspace></MainWorkspace>
        <ContextMenu></ContextMenu>
      </div>
      <StatsFooter></StatsFooter>
    </div>
  </div>

  <PresentationScreen></PresentationScreen>
</template>
