<template>
  <div id="app">
    <TheHeader />
    <router-view/>
  </div>
</template>
<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader
  },
};
</script>
<style>

#nav {
  display: flex;
  justify-content: center;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
