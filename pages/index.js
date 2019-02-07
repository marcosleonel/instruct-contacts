import axios from 'axios';
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
    mock: API_MOCK,
    filter: '',
  }),

  async asyncData() {
    const { data } = await axios.get('http://jsonplaceholder.typicode.com/users');
    return { contactList: data };
  },

  methods: {
    matchCondintion(email, filter) {
      if (filter === '' || filter === undefined || filter === null) return true;
      const domain = email.split('@').pop();
      const afterDot = domain.split('.').pop();
      const isItOK = afterDot.indexOf(filter) !== -1; // eslint-disable-line
      return isItOK;
    },

    getFilterOptions(list) {
      const options = [];
      let isDuplicated = false;

      for (let i = 0; i < list.length; i++) { // eslint-disable-line
        const contact = list[i];
        const domain = contact.email.split('@').pop();
        const option = domain.split('.').pop();

        options.forEach((item) => { // eslint-disable-line
          if (item === option) isDuplicated = true;
        });

        if (!isDuplicated) options.push(option);
      }

      return options;
    },
  },
};

export default App;
