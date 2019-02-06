<template>
  <section class="contact-card">

    <div class="row">
      <div class="contact-card__initial">
        <span class="contact-card__initial__char">
          {{ contactName | returnInitial }}
        </span>
      </div>

      <div class="contact-card__names">
        <h4 class="contact-card__names__civil-name">
          {{ contactName }}
        </h4>
        <small class="contact-card__names__username">
          {{ contactUsername }}
        </small>
      </div>

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

  </section>
</template>

<script src="./ContactCard.js"></script>
