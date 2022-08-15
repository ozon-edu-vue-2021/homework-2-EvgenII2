<template>
  <a class="tree-link" v-bind:href="target" v-on:click="selectLinkTitle">
    LINK:
    <span>
      {{ name }}
    </span>
  </a>
</template>

<script>
export default {
  name: "Link",
  props: {
    name: {
      type: String,
    },
    target: {
      type: String,
    },
  },
  methods: {
    selectLinkTitle(event) {
      event.preventDefault();
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
.tree-link {
  cursor: default;
  text-decoration: none;
  color: red;
}
</style>
