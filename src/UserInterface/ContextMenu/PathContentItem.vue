<script setup>
//const pathLocations = [];
defineProps({
  itemPath: String,
  itemType: String,
  asideId: String,
});

//import { inject } from "vue";

//const ContextMenuControll = inject("ContextMenuControll");
</script>

<template>
  <li class="list-group-item d-grid gap-2">
    <a
      class="btn btn-outline-info"
      v-if="itemType == 'dir'"
      :href="'#' + asideId"
      @click="$emit('openContext', itemPath, this)"
    >
      <slot></slot>
    </a>
    <button
      class="btn btn-outline-danger"
      data-bs-dismiss="offcanvas"
      v-else-if="itemType == 'command'"
      @click="$emit('openItem', itemPath, this)"
    >
      <slot></slot>
    </button>
  </li>
</template>
