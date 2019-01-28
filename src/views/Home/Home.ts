import Vue from "vue";
import NavMenu from "@/components/NavMenu/NavMenu.vue"; // @ is an alias to /src
import WelcomePage from "@/components/WelcomePage/WelcomePage.vue";

export default Vue.extend({
  name: "home",
  components: {
    NavMenu,
    WelcomePage
  }
});
