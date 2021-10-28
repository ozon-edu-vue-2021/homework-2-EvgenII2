<template>
  <div class="tree-folder">
    <p class="tree-folder__title" v-on:click="clickHandler">
      {{ "DIRECTORY: " + name }}
    </p>
    <ul class="tree-folder__content">
      <li v-for="(item, index) in contents" :key="index" v-show="visible">
        <Folder
          v-if="isFolder(item)"
          :name="item.name"
          :contents="item.contents"
        />
        <File v-else-if="isFile(item)" :name="item.name" />
        <Link v-else :name="item.name" :target="item.target" />
      </li>
    </ul>
  </div>
</template>

<script>
import { isFolder, isFile, isLink } from "../utils/utils";
import File from "./File.vue";
import Link from "./Link.vue";

export default {
  name: "Folder",
  components: {
    File,
    Link,
  },
  data() {
    return {
      visible: false,
    };
  },
  props: {
    name: {
      type: String,
    },
    contents: {
      type: Array,
    },
  },
  methods: {
    clickHandler() {
      this.visible = !this.visible;
    },
    isFolder,
    isFile,
    isLink,
  },
};
</script>

<style scoped>
.tree-folder__content {
  margin: 0;
  list-style: none;
}
.tree-folder__title {
  cursor: pointer;
  color: blue;
  margin: 0;
  padding: 0;
}
</style>
