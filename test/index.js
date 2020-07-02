import choicesAnswer from "../src";
import Vue from "vue";

import App from "./App.vue";

Vue.use(choicesAnswer);

new Vue({
  render: h => h(App)
}).$mount("#app");
