<template>
  <div class="tree-file" v-on:click="selectFileTitle">
    FILE:
    <span>
      {{ name }}
    </span>
  </div>
</template>

<script>
export default {
  name: "File",

  props: {
    name: {
      type: String,
    },
  },
  methods: {
    selectFileTitle() {
      let range = new Range();
      range.setStart(this.$el, 1);
      range.setEnd(this.$el, 2);
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(range);
    },
  },
};
</script>

<style scoped>
.tree-file {
  cursor: default;
  color: green;
}
</style>