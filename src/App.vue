<template>
  <div id="app">
    <header-component
      :currentTheme="currentTheme"
      :userInput="userInput"
      v-on:inputAdded="userInput = $event;getUserData()"
    />
    <main-component
      :userData="userData"
      :userRepos="userRepos"
      v-on:themeChanged="currentTheme = $event"
    />
    <footer-component :currentTheme="currentTheme" />
  </div>
</template>

<script>
import HeaderComponent from "./components/header-component.vue";
import MainComponent from "./components/main-component.vue";
import FooterComponent from "./components/footer-component.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  },
  data() {
    return {
      userInput: "",
      userData: {},
      userRepos: {},
      currentTheme: ""
    };
  },
  methods: {
    getUserData() {
      axios.get("https://api.github.com/users/" + this.userInput).then(res => {
        this.userData = res.data;
        console.log(this.userData);
        axios
          .get("https://api.github.com/users/" + this.userInput + "/repos", {
            params: {
              type: "owner",
              sort: "updated"
            }
          })
          .then(result => {
            this.userRepos = result.data;
          });
      });
    }
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

