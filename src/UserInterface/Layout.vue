<script setup>
import ContextMenu from "./ContextMenu/_index.vue";
import HeaderNavbar from "./HeaderNavbar/_index.vue";
import MainWorkspace from "./MainWorkspace/_index.vue";
import PresentationScreen from "./PresentationScreen/_index.vue";
import Loading from "./Loading/_index.vue";
import StatsFooter from "./StatsFooter/_index.vue";

import LayoutControll from "@/WorkspaceGears/LayoutControll/LayoutControll";

const CONTROLLER = new LayoutControll();
//console.log(CONTROLLER);
</script>

<template>
  <Loading></Loading>
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
