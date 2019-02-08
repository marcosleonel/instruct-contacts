<template>
  <div class="app">
    <!-- CABEÇALHO -->
    <Header
      title="Lista de Contatos"
      subtitle="Explore e utilize o filtro para selecionar contatos." />

    <main class="container">

      <!-- FILTRO DE RESULTADOS DA LISTA DE CONTATOS -->
      <form>
        Filtrar por final do e-mail:
        <select
          v-model="filter"
          name="emails">
          <option value="">
            Todos
          </option>
          <option
            v-for="(option, index) in getFilterOptions(contactList)"
            :key="index"
            :value="option">
            .{{ option }}
          </option>
        </select>
      </form>

      <!-- LISTA COM OS CARDS DE CONTATOS -->
      <div
        v-for="contact in contactList"
        :key="contact.id">
        <ContactCard
          v-if="matchCondintion(contact.email, filter)"
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
