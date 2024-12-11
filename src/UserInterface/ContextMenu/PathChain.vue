<script setup>
//const pathLocations = [];
import PathChainItem from "./PathChainItem.vue";

import { useId } from "vue";

defineProps({
  asideId: String,
  chain: Array,
});

defineEmits(["openContext"]);

function mergeContextPath(fullchain, index) {
  return fullchain.slice(0, index + 1).join("/");
}
</script>

<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <PathChainItem
        :key="useId()"
        v-for="(item, index) in chain"
        :aside-id="asideId"
        :item-path="mergeContextPath(chain, index)"
        :item-active="chain.length - 1 == index"
        @open-context="openContext"
      >
        {{ item }}
      </PathChainItem>
    </ol>
  </nav>
</template>
