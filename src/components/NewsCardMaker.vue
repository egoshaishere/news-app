<template>
  <div class="card_maker">

    <div class="card_list">
      <article class="card" v-for="(card, index) in newsList" :key="index">
        <header>
          <img class="card_image" v-if="card.urlToImage" :src="card.urlToImage" alt="" />
          <i v-else class="fas fa-image"></i>
        </header>
        <section v-html="card.title"></section>
        <div v-html="card.description"></div>
        <footer>
          <i class="fas fa-chevron-right"></i>
        </footer>
      </article>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NewsCardMaker",
  methods: {},
  computed: {
    ...mapGetters({
      newsList: "newsList",
    }),
  },
  mounted() {},
};
</script>

<style>
.card_maker {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

 .card_list {
    display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.card {
  color: white;
/* display: flex;
  flex-direction: column;*/
  width: 15%;  
  border: solid 2px white;
  margin: 10px;
} 

.card_image {
    width: 100%;
}

</style>