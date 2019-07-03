<template>
  <div id="app">
    <header-component />
    <main-component />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "./components/header-component.vue";
import MainComponent from "./components/main-component.vue";
import FooterComponent from "./components/footer-component.vue";

export default {
  name: "app",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap");
#app {
  font-family: "Roboto Mono", monospace;
  max-height: 100vh;
  overflow: hidden;
}
</style>

