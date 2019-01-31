import Vue from "vue";
import NavMenu from "@/components/NavMenu/NavMenu.vue";
import AppLogo from "@/components/AppLogo/AppLogo.vue";

export default Vue.extend({
  name: "WelcomePage",
  data() {
    return {
      isExpanded: false
    };
  },
  components: {
    NavMenu,
    AppLogo
  },
  methods: {
    onMainLogoClick: function() {
      // makes the content expanded
      this.isExpanded = true;
    }
  }
});
