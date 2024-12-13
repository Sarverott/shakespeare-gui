<script setup>
import { ref } from "vue";
import { UmoEditor } from "@umoteam/editor";

const options = ref({
  theme: "dark",
  locale: "en-US",
  translations: {
    en_US: {},
  },
  // Configuration options
  // ...
});
</script>

<template>
  <umo-editor v-bind="options" />
  <!-- Or -->
  <!-- 
    <umo-editor 
      :editor-key="options.editorKey" 
      ... 
    /> -->
</template>

<style lang="less">
@import "./main.less";
</style>
