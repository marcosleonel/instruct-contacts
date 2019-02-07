import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone,
  faEnvelope,
  faHome,
  faUser,
  faBuilding,
  faMapPin,
  faLaptop,
  faGlobe,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faPhone,
  faEnvelope,
  faHome,
  faUser,
  faBuilding,
  faMapPin,
  faLaptop,
  faGlobe,
  faMapMarker,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
