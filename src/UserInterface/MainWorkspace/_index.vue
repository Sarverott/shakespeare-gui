<template>
  <umo-editor v-bind="options" />
  <!-- Or -->
  <!-- 
    <umo-editor 
      :editor-key="options.editorKey" 
      ... 
    /> -->
</template>

// Using Composition API
<script setup>
import { ref } from "vue";
import { UmoEditor } from "@umoteam/editor";

const options = ref({
  locale: "en-US",
  translations: {
    en_US: {},
  },
  // Configuration options
  // ...
});
</script>
