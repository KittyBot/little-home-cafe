import Vue from "vue";

export default Vue.extend({
  name: "WelcomePage",
  data() {
    return {
      isExpanded: false
    };
  },
  methods: {
    onMainLogoClick: function() {
      // makes the content expanded
      this.isExpanded = !this.isExpanded;
    }
  }
});
