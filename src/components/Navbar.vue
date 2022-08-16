<template>
  <div>
    <v-app-bar color="#353e52" app elevate-on-scroll>
      <v-icon class="white--text" v-on:click="navOpenCloseHandler">
        mdi-menu
      </v-icon>

      <v-toolbar-title  class="text-uppercase toolbar__title white--text">
        <span class="font-weight-light">Egosha</span>
        <span>news</span>
      </v-toolbar-title>

      <v-spacer />

      <v-btn text class="white--text">
        <span>Sign Out</span>
        <v-icon> mdi-login </v-icon>
      </v-btn>
    </v-app-bar>


    <v-navigation-drawer v-model="isOpen" app color="#353e52" >
      <v-layout class="mt-16" column align-center>
        <v-flex>
          <img class="navbar__logo" src="/world-news.png" alt="">
        </v-flex>
      </v-layout>


      <v-list class="mt-5">
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{link.text}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>


      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>



export default {
  name: "Navbar",
  components: {
  },
  data() {
    return {
      isOpen: false,
      links: [
        {icon: 'newspaper', text: 'News', route: '/'},
        {icon: 'emoji_symbols', text: 'Sandbox', route: '/sandbox'},
      ]
    };
  },
  methods: {
    navOpenCloseHandler() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
.toolbar__title {
  margin-left: 50px;
}

/* .navbar__container{
  margin-top: 30px;
} */

.navbar__logo {
  width: 100px;
  height: 100px;
}

.bar__text_color {
  color: #ffffff;
}

</style>