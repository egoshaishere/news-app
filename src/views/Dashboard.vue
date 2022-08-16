<template>
  <div class="dashboard">
    <h1 class="news_logo">News</h1>
    <NewsCardMaker />

  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NewsCardMaker from '../components/NewsCardMaker.vue'

export default {
  name: "News",
  components: {
    NewsCardMaker
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions({
      getNews: 'getNews' // проксирует `this.getNews()` в `this.$store.dispatch('getNews')`
    })
  },
  mounted() {
    this.getNews()

  }
};
</script>


<style>

.news_logo {
  color: #ffffff;
}
</style>
