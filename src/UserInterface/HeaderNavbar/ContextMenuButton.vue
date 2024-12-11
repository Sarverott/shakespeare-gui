<script setup>
import { inject } from "vue";

const asideMenuBoxID = inject("asideMenuBoxID");
</script>

<template>
  <button
    class="btn btn-secondary fs-1 px-4"
    type="button"
    data-bs-toggle="offcanvas"
    :data-bs-target="'#' + asideMenuBoxID"
    :aria-controls="asideMenuBoxID"
  >
    &Congruent;
  </button>
</template>
