<script setup>
import { inject } from "vue";

const ContextMenuControll = inject("ContextMenuControll");
</script>

<template>
  <button
    class="btn btn-secondary fs-1 px-4"
    type="button"
    data-bs-toggle="offcanvas"
    :data-bs-target="'#' + ContextMenuControll.ID"
    :aria-controls="ContextMenuControll.ID"
  >
    &Congruent;
  </button>
</template>
