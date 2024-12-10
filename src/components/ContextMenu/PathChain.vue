<script setup>
//const pathLocations = [];
import PathChainItem from "./PathChainItem.vue";
import { ref } from "vue";
defineProps({
  chain: Array,
});
const
export default {
  props: {},
  methods: {
    generateChainBlocks(pathchain) {
      var flagLast = true;
      var revChain = pathchain.reverse();
      for (var i in revChain) {
        this.pathLoc.unshift({
          href: "#contextmenu_" + revChain.slice(i).reverse().join("/"),
          title: revChain[i],
          active: flagLast,
        });
        flagLast = false;
      }
      // setup() receives props as the first argument.
      //console.log(i);
      console.log(this.pathLoc);
      return this.pathLoc;
    },
  },
  data() {
    return {
      pathLoc: [],
    };
  },
};
</script>

<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li
        :key="'pathLocationsContextChain' + index"
        v-for="(item, index) in generateChainBlocks(chain)"
        :class="item.active ? 'breadcrumb-item active' : 'breadcrumb-item '"
      >
        <a v-if="!item.active" :href="item.href">{{ item.title }}</a>
        <span v-else-if="item.active">{{ item.title }}</span>
      </li>
    </ol>
  </nav>
</template>
