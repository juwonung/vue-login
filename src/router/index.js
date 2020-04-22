import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);
//제한적 기능 구현 router guard
const rejectAuthUser = (to, from, next) => {
  if(store.state.isLogin === true) {
    alert("이미 로그인 했습니다.");
    next("/");
  } else {
    next();
  }
};
const onlyAuthUser = (to, from, next) => {
  if(store.state.isLogin === false) {
    alert("로그인 해야 합니다.");
    next("/login");
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    beforeEnter: rejectAuthUser,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/mypage",
    name: "mypage",
    beforeEnter: onlyAuthUser, //로그인 했을때만 가능
    component: () => import("../views/MyPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
