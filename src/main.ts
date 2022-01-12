import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCannabis,
  faGlassCheers,
  faShieldVirus,
  faMoneyBillWave,
  faCameraRetro,
  faMapMarkedAlt,
  faCalendarMinus,
  faMask,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import router from "./router";

library.add(faCannabis);
library.add(faGlassCheers);
library.add(faShieldVirus);
library.add(faMoneyBillWave);
library.add(faCameraRetro);
library.add(faMapMarkedAlt);
library.add(faCalendarMinus);
library.add(faMask);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
