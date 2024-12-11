<script setup>
//import { ref } from 'vue'
import ContextMenuButton from "./ContextMenuButton.vue";
</script>

<template>
  <div class="d-flex gap-2 py-4 px-2">
    <ContextMenuButton></ContextMenuButton>
    <span class="fs-1 px-3">ShakeSpeare</span>
    <button class="btn btn-secondary rounded-pill px-2" type="button">
      Secondary
    </button>
    <button class="btn btn-success rounded-pill px-3" type="button">
      Success
    </button>
    <button class="btn btn-danger rounded-pill px-3" type="button">
      Danger
    </button>
    <button class="btn btn-warning rounded-pill px-3" type="button">
      Warning
    </button>
    <button class="btn btn-info rounded-pill px-3" type="button">Info</button>
    <button class="btn btn-light rounded-pill px-3" type="button">Light</button>
    <button class="btn btn-dark rounded-pill px-3" type="button">Dark</button>
    <button class="btn btn-link rounded-pill px-3" type="button">Link</button>
  </div>
</template>
