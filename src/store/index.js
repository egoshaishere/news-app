import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//news api key = 6dc295b1ea5844999c4a4696182028c2
const API_KEY = "6dc295b1ea5844999c4a4696182028c2"
//https://newsapi.org/docs/get-started
//https://www.youtube.com/watch?v=8wPClWnmmCc
//https://vuejsexamples.com/ease-to-use-color-gradient-generator-with-vue/

async function getDataExample() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  return await response.json();
}

export default new Vuex.Store({
  state: {
    news: []
  },
  getters: {
    newsList(state){
      return state.news
    }
  },
  mutations: {
    gotNews(state, payload) {
      state.news = payload.articles
    },
  },
  actions: {
    async getNews({ commit, state }) {
      const newsResponse = await fetch(`https://newsapi.org/v2/everything?q=Apple&from=2022-08-16&sortBy=popularity&apiKey=${API_KEY}`)
      commit('gotNews', await newsResponse.json())
    },
  },
  modules: {
  }
})
