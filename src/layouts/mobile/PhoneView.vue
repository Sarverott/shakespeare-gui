<script setup>
import MainBody from "@/components/base/MainBody.vue";
import LoadingScreen from "@/components/base/LoadingScreen.vue";
import StartScreen from "@/components/base/StartScreen.vue";
import ContextMenu from "@/components/base/ContextMenu.vue";
import MicroFooter from "@/components/base/MicroFooter.vue";
import TopHeader from "@/components/base/TopHeader.vue";
</script>

<template>
  <LoadingScreen></LoadingScreen>
  <StartScreen></StartScreen>
  <div>
    <TopHeader></TopHeader>
    <div>
      <MainBody></MainBody>
      <ContextMenu></ContextMenu>
    </div>
    <MicroFooter></MicroFooter>
  </div>
</template>
