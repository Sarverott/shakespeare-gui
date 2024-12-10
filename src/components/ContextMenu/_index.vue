<script setup>
//import bootstrap from "bootstrap";

import { inject, useId, provide } from "vue";

import PathChain from "./PathChain.vue";
import PathContent from "./PathContent.vue";

const asideMenuBoxID = inject("asideMenuBoxID");

const chain = inject("contextPathChain");
const content = inject("contextPathContent");

const asideMenuHeaderID = useId();
</script>

<template>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    :id="asideMenuBoxID"
    :aria-labelledby="asideMenuHeaderID"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" :id="asideMenuHeaderID">
        <PathChain :chain="chain" :aside-id="asideMenuBoxID"></PathChain>
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <PathContent :chain="chain" :content="content" :aside-id="asideMenuBoxID">
    </PathContent>
  </div>
</template>
