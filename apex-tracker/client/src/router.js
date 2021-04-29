import Vue from "vue";
import Router from "vue-router";
import Profile from "./components/Profile.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/profile/:platform/:gamertag",
      name: "profile",
      component: Profile
    }
  ]
});
