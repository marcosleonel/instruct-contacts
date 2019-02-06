const ContactCard = {
  name: 'ContactCard',

  props: {
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

  filter: {
    returnInitial(name) {
      return name.substring(0, 1);
    },
  },
};

export default ContactCard;
