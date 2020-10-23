<template>
  <div class="main-container">
    <header>
      <g-link class="title" to="/">{{ $static.metadata.siteName }}</g-link>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
/*
  Fonts wouldn't load in tailwind.config.js, so load them here
*/
@font-face {
  font-family: 'Journal';
  src: url('/fonts/Journal-Regular.otf');
  font-weight: normal;
}

@font-face {
  font-family: 'Castledown';
  src: url('/fonts/Journal-Bold.otf');
  font-weight: bold;
}

header {
  height: 4.5rem;
}

.main-container {
  margin: auto;
  max-width: 80vw;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  line-height: 4rem;
}
</style>
