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
    filteredList: API_MOCK,
    filter: '',
  }),

  watch: {
    filter(val) {
      this.filterList(this.contactList, val);
    },
  },

  methods: {
    filterList(list, filter) {
      const filteredContacts = [];

      for (let i = 0; i < list.length; i + 1) {
        const contact = list[i];
        const domain = contact.email.split('@').pop();

        if (domain.indexOf(filter) !== -1) filteredContacts.push(contact);
      }

      this.filteredList = filteredContacts;
    },

    getFilterOptions(list) {
      const options = [];

      for (let i = 0; i < list.length; i++) { // eslint-disable-line
        const contact = list[i];
        const domain = contact.email.split('@').pop();
        const option = domain.split('.').pop();

        options.push(option);
      }

      return options;
    },
  },
};

export default App;
