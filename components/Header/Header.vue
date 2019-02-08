<template>
  <header class="header">

    <!-- BARRA SUPERIOR -->
    <nav class="header__topbar">
      <img
        class="header__topbar__Logo"
        src="/img/instruct-logo.svg"
        alt="Logo da Instruct">
    </nav>

    <!-- SECÇÃO DO TÍTULO -->
    <section class="header__presentation">
      <div class="container">
        <h1 class="header__presentation__title">
          {{ title }}
        </h1>

        <small v-if="subtitle" class="header__presentation__subtitle">
          {{ subtitle }}
        </small>
      </div>
    </section>
  </header>
</template>

<script src="./Header.js"></script>
