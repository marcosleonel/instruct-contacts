<template>
  <section :class="toggleCard ? 'contact-card--collapsed' : 'contact-card'">

    <!-- INFORMAÇÕES PRIMÁRIAS -->
    <div class="row">
      <a @click="toggleCard = !toggleCard">
        <div class="contact-card__initial">
          <span class="contact-card__initial__char">
            {{ contactName | returnInitial }}
          </span>
        </div>
      </a>

      <a @click="toggleCard = !toggleCard">
        <div class="contact-card__names">
          <h4 class="contact-card__names__civil-name">
            {{ contactName }}
          </h4>
          <small class="contact-card__names__username">
            {{ contactUsername }}
          </small>
        </div>
      </a>

      <div class="contact-card__primary-info">
        <p class="contact-card__primary-info__phone">
          <font-awesome-icon
            icon="phone"
            class="contact-card__primary-info__icon" />
          {{ contactPhone }}
        </p>
        <p class="contact-card__primary-info__email">
          <font-awesome-icon
            icon="envelope"
            class="contact-card__primary-info__icon" />
          {{ contactEmail }}
        </p>
      </div>
    </div>

    <!-- INFORMAÇÕES SECUNDÁRIAS -->
    <div :class="toggleCard ? 'row' : 'row--hidden'">
      <!-- MAPA -->
      <div :class="toggleCard ? 'contact-card__map' : 'contact-card__map--hidden'">
        <iframe
          width="320"
          height="160"
          frameborder="0"
          :src="`https://www.bing.com/maps/embed?h=160&w=320&cp=${contactGeoLat}~${contactGeoLng}&lvl=14&typ=s&sty=h&src=SHELL&FORM=MBEDV8`"
          scrolling="no" />
      </div>

      <div class="contact-card__secondary-info">
        <p class="contact-card__secondary-info__block">
          <font-awesome-icon
            icon="laptop"
            class="contact-card__secondary-info__icon" />
          {{ contactWebsite }}
        </p>

        <p class="contact-card__secondary-info__block">
          <font-awesome-icon
            icon="home"
            class="contact-card__secondary-info__icon" />
          {{ contactStreet }}, {{ contactSuite }}
        </p>

        <p class="contact-card__secondary-info__block">
          <font-awesome-icon
            icon="map-marker"
            class="contact-card__secondary-info__icon" />
          {{ contactCity }}
        </p>

        <p class="contact-card__secondary-info__block">
          <font-awesome-icon
            icon="map-pin"
            class="contact-card__secondary-info__icon" />
          {{ contactZipcode }}
        </p>

        <p class="contact-card__secondary-info__block">
          <font-awesome-icon
            icon="globe"
            class="contact-card__secondary-info__icon" />
          {{ contactGeoLat }}, {{ contactGeoLng }}
        </p>

        <p class="contact-card__secondary-info__block">
          <font-awesome-icon
            icon="building"
            class="contact-card__secondary-info__icon" />
          {{ companyName }}
          <small>
            {{ companyCatchPhrase }}
          </small>
          <small class="bs">
            {{ companyBs }}
          </small>
        </p>
      </div>
    </div>

  </section>
</template>

<script src="./ContactCard.js"></script>
