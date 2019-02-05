<template>
  <header class="header">

    <h1 class="header__title">
      {{ title }}
    </h1>

    <small v-if="subtitle" class="header__subtitle">
      {{ subtitle }}
    </small>

  </header>
</template>

<script src="./Header.js"></script>
