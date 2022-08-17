<template>
  <div class="card_maker">
    <div class="card_container">
      <div class="cards">
        <article class="card" v-for="(card, index) in newsList" :key="index">
          <header>
            <img
              class="card_image"
              v-if="card.urlToImage"
              :src="card.urlToImage"
              alt=""
            />
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
/* .card_maker {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px red;
}
.cards {
  border: solid 2px white;
   display: flex; 
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
   width: 80%; 
}
*/
.card {
  color: white;
  display: flex;
  flex-direction: column;
  width: 200px;

  border-radius: 30px;
  /* из палетки
  background-color: #656c85; */
  background-color: #656c8581;
  padding: 0 0 20px 0;
} 

.card_image {
  width: 100%;
  border-radius: 30px 30px 0 0;
}

.card_maker {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 60px;
}


.card_container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
}


.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* width: 90%; */
  height: 100%;
  gap: 20px;
}

</style>