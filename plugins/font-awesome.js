import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone,
  faEnvelope,
  faHome,
  faUser,
  faBuilding,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faPhone,
  faEnvelope,
  faHome,
  faUser,
  faBuilding,
  faDollarSign,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
