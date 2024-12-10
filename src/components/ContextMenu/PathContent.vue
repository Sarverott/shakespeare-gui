<script setup>
//const pathLocations = [];
import { useId } from "vue";
import PathContentItem from "./PathContentItem.vue";
defineProps({
  content: Array,
  chain: Array,
  asideId: String,
});

function getFullPath(dirChain, itemname) {
  return dirChain.concat([itemname]).join("/");
}
</script>

<template>
  <ul class="list-group">
    <PathContentItem
      :key="useId()"
      v-for="item in content"
      :item-path="getFullPath(chain, item.name)"
      :item-type="item.type"
      :aside-id="asideId"
    >
      {{ item.name }}
    </PathContentItem>
  </ul>
</template>
