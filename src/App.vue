<template>
  <v-app>
    <div class="app__container" style="height: 100%">
      <Navbar />
      <v-main class="mx-4 mb-4">
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  }
};
</script>

<style>
.view__title {
  margin-left: 12px;
}

.app__container {
  background: #242b39;
}
</style>
