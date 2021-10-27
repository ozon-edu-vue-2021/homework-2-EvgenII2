<template>
  <div class="tree">
    <Folder :name="items.name" :contents="items.contents" />
  </div>
</template>

<script>
import items from "../../public/static/node_modules.json";
import Folder from "./Folder.vue";
export default {
  name: "Tree",
  components: {
    Folder,
  },
  data: () => ({
    items,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>