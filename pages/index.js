import axios from 'axios';
import Header from '../components/Header/Header.vue';
import ContactCard from '../components/ContactCard/ContactCard.vue';

const App = {
  name: 'App',

  loading: true,

  components: {
    Header,
    ContactCard,
  },

  data: () => ({
    filter: '',
  }),

  /**
  * Faz a requisição da lista de contatos à API.
  * @return {array} retorna uma array com a lista de contatos retornada pelo endpoint.
  */
  async asyncData() {
    const { data } = await axios.get('http://jsonplaceholder.typicode.com/users');
    return { contactList: data };
  },

  methods: {
    /**
    * Checa se o e-mail enviado possui o final do host escolhido no filtro.
    * @param {number} email - endereço de e-mail do contato
    * @param {string} filter - final do host selecionado
    * @return {boolean} retorna 'true' se combinar e 'false' caso contrário.
    */
    matchCondintion(email, filter) {
      if (filter === '' || filter === undefined || filter === null) return true;

      const domain = email.split('@').pop();
      const afterDot = domain.split('.').pop();
      const isItOK = afterDot.indexOf(filter) !== -1; // eslint-disable-line

      return isItOK;
    },

    /**
    * Seleciona os finais de hosts de e-mail de uma lista de contatos.
    * @param {array} list - lista de contados com o campo 'email'
    * @return {array} retorna uma array com os finais de hosts únicos.
    */
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
