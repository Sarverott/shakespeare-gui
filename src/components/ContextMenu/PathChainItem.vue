<script setup>
//const pathLocations = [];
defineProps({
  itemPath: String,
  itemActive: Boolean,
});
</script>

<template>
  <li :class="itemActive ? 'breadcrumb-item active' : 'breadcrumb-item '">
    <a v-if="!itemActive" :href="'#contextmenu_' + itemPath">
      <slot></slot>
    </a>
    <span v-else-if="itemActive">
      <slot></slot>
    </span>
  </li>
</template>
