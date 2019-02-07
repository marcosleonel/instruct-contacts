<template>
  <div class="app">
    <Header
      title="Contact List"
      subtitle="Explore e utilize o filtro para selecionar contatos." />


    <main class="container">

      <form>
        Filtrar por e-mail:
        <select
          v-model="filter"
          name="emails">
          <option value="">
            Selecione...
          </option>
          <option
            v-for="(option, index) in getFilterOptions(contactList)"
            :key="index"
            :value="option">
            {{ option }}
          </option>
        </select>
      </form>

      <div
        v-for="contact in filteredList"
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
      </div>
    </main>

  </div>
</template>

<script src="./index.js"></script>
