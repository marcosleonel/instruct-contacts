const ContactCard = {
  name: 'ContactCard',

  props: {
    toggleCard: false,
    id: Number,
    contactName: String,
    contactUsername: String,
    contactEmail: String,
    contactStreet: String,
    contactSuite: String,
    contactCity: String,
    contactZipcode: String,
    contactGeoLat: String,
    contactGeoLng: String,
    contactPhone: String,
    contactWebsite: String,
    companyName: String,
    companyCatchPhrase: String,
    companyBs: String,
  },

  filters: {
    /**
    * Extrai a inicial do nome de um contato.
    * @param {string} name - nome para ser retirada a inicial
    * @return {string} retorna o character inicial da string enviada
    */
    returnInitial(name) {
      return name.slice(0, 1);
    },
  },
};

export default ContactCard;
