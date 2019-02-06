import Header from '../components/Header/Header.vue';
import ContactCard from '../components/ContactCard/ContactCard.vue';

import API_MOCK from '../assets/mock';

const App = {
  name: 'App',

  components: {
    Header,
    ContactCard,
  },

  data: () => ({
    contactList: API_MOCK,
  }),
};

export default App;
