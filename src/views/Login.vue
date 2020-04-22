<template>
  <v-container fill-height style="max-width:450px">
    <v-layout align-center row wrap>
      <v-flex x52>
        <v-card>
          <v-alert :value="isLoginError" type="error">
            아이디와 비밀번호가 맞지않습니다. 다시 입력해주세요</v-alert>
            <v-alert
            :value="isLogin"
            type="success">
            로그인 되었습니다.</v-alert>
          <v-toolbar flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field label="Email" v-model="email"></v-text-field>
            <v-text-field
              label="Password"
              v-model="password"
              type="password"
            ></v-text-field>
            <v-btn
              dpressed
              block
              large
              color="primary"
              @click="
                login({
                  email: email,
                  password: password
                })"
              >login</v-btn
            >
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  computed: {
      ...mapState([
          "isLogin", 
          "isLoginError"])
  },
  methods: {
    ...mapActions(["login"])
  }
}
</script>
