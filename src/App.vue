<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import request from "request"

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
      request('http://localhost:8080/api/index', function (error, response, body) {
          window.console.log("error ::", error);
          window.console.log("status code ::", response && response.statusCode);
          window.console.log("body ::", body);
      });
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
