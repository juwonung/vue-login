<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item router :to="{ name: 'home' }" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="{ name: 'mypage' }" exact>
          <v-list-item-action>
            <v-icon>mdi-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>My page</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
       <v-spacer></v-spacer>
       <v-menu offset-y v-if="isLogin">
      <template v-slot:activator="{ on }">
        <v-btn
          color="white"
          dark
          flat
          icon
          v-on="on">
          <v-icon>mdi-arrow-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
            <v-list-item-title @click="$store.dispatch('logout')">
              logout</v-list-item-title
            >
        </v-list-item>
          <v-list-item router :to="{ name: 'mypage' }">
          <v-list-item-title>mypage</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      <v-btn icon v-else router :to="{ name: 'login' }">login
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,

  }),
  computed: {
    ...mapState(["isLogin"])
  },
  methods: {
    ...mapActions([])
  }
};
</script>