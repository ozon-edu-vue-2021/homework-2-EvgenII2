<template>
  <div id="app">
    <tree />
  </div>
</template>

<script>
import Tree from "./components/Tree.vue";

export default {
  name: "App",
  components: {
    Tree,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
