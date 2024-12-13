<script setup>
import { inject } from "vue";
import Editor from "../_components/Editor/_index.vue";

const CONTROLL = inject("MainWorkspaceControll");
</script>

<template>
  <Editor v-if="CONTROLL.view == 'editor'"></Editor>
</template>
