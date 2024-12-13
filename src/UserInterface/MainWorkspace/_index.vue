<script setup>
import { reactive } from "vue";
import Editor from "../_components/Editor/_index.vue";
import Dashboard from "../_components/Dashboard/_index.vue";
import MindmapScope from "../_components/MindmapScope/_index.vue";
import WellcomeView from "../_components/WellcomeView/_index.vue";

const emits = defineEmits(["loadNamespace"]);

import CONTROLLER from "./_controller";

const current = reactive({ view: "" });

emits("loadNamespace", {
  "open-dashboard": (...args) => {
    current.view = "dashboard";
  },
  "open-recent": () => {},
  "local-project-list": () => {},
  "new-project": () => {
    current.view = "editor";
  },
  "new-scope": () => {
    current.view = "editor";
  },
  "project-recent-actions": () => {},
  "remote-project-list": () => {},
  "sync-options": () => {},
  "download-project": () => {},
  "upload-project": () => {},
  "export-options": () => {},
  "import-options": () => {},
  "publication-logs": () => {},
  "feedback-interface": () => {},
  "show-my-profile": () => {},
  "audio-setup": () => {},
  "visual-setup": () => {},
  "restart-app": () => {
    provide("MainSpaceView", 0);
  },
  "log-out-user": () => {},
});
</script>

<template>
  <Editor v-if="current.view == 'editor'"></Editor>
  <Dashboard v-else-if="current.view == 'dashboard'"></Dashboard>
  <MindmapScope v-else-if="current.view == 'mindmap'"></MindmapScope>
  <WellcomeView v-else></WellcomeView>
</template>
