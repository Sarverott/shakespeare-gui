<script setup>
//const pathLocations = [];

import { useId, inject } from "vue";

//const CONTROLLER = inject("ContextMenuControll");

//const data = defineProps(["chain", "boxId"]);
</script>

<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <slot></slot>
    </ol>
  </nav>
</template>
