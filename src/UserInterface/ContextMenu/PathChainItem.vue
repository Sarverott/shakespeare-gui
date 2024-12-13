<script setup>
import { inject } from "vue";

//const pathLocations = [];
defineProps({
  itemPath: String,
  itemActive: Boolean,
  asideId: String,
});

//const { openContext } = inject("ContextMenuControll");
</script>

<template>
  <li :class="itemActive ? 'breadcrumb-item active' : 'breadcrumb-item '">
    <a
      v-if="!itemActive"
      :href="'#' + asideId"
      @click="$emit('openContext', itemPath, this)"
    >
      <slot></slot>
    </a>
    <span v-else-if="itemActive">
      <slot></slot>
    </span>
  </li>
</template>
