<script setup>
//const pathLocations = [];
defineProps({
  itemPath: String,
  itemType: String,
  asideId: String,
});

import { inject } from "vue";
const openContext = inject("openContext");
const openItem = inject("openItem");
</script>

<template>
  <li class="list-group-item">
    <a
      v-if="itemType == 'dir'"
      :href="'#' + asideId"
      @click="openContext(itemPath)"
    >
      <slot></slot>
    </a>
    <button
      data-bs-dismiss="offcanvas"
      v-else-if="itemType == 'file'"
      @click="openItem(itemPath)"
    >
      <slot></slot>
    </button>
  </li>
</template>
