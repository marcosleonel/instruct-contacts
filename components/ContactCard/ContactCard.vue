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
        <span class="contact-card__primary-info__phone">
          {{ contactPhone }}
        </span>
        <span class="contact-card__primary-info__email">
          {{ contactEmail }}
        </span>
      </div>
    </div>

  </section>
</template>

<script src="./ContactCard.js"></script>
