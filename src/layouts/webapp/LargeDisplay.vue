<script setup>
import MainBody from "@/components/base/MainBody.vue";
import LoadingScreen from "@/components/base/LoadingScreen.vue";
import StartScreen from "@/components/base/StartScreen.vue";
import ContextMenu from "@/components/ContextMenu/_index.vue";
import MicroFooter from "@/components/base/MicroFooter.vue";
import HeaderNavbar from "@/components/HeaderNavbar/_index.vue";
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
