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
    contactGetLng: String,
    contactPhone: String,
    contactWebsite: String,
    companyName: String,
    companyCatchPhrase: String,
    companyBs: String,
  },

  filters: {
    returnInitial(name) {
      return name.slice(0, 1);
    },
  },
};

export default ContactCard;
