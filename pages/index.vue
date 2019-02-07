<template>
  <div class="app">
    <div class="container">
      <Header
        title="Contact List"
        subtitle="Explore a lista e utilize os filtros para selecionar contatos específicos." />

      <main
        v-for="contact in contactList"
        :key="contact.id">
        <ContactCard
          :id="contact.id"
          :contact-name="contact.name"
          :contact-username="contact.username"
          :contact-email="contact.email"
          :contact-street="contact.address.street"
          :contact-suite="contact.address.suite"
          :contact-city="contact.address.city"
          :contact-zipcode="contact.address.zipcode"
          :contact-geo-lat="contact.address.geo.lat"
          :contact-geo-lng="contact.address.geo.lng"
          :contact-phone="contact.phone"
          :contact-website="contact.website"
          :company-name="contact.company.name"
          :company-catch-phrase="contact.company.catchPhrase"
          :company-bs="contact.company.bs" />
      </main>

    </div>
  </div>
</template>

<script src="./index.js"></script>
