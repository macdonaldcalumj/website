<template>
  <div class="main-container">
    <div class="content">
      <header>
        <g-link class="title" to="/">{{ $static.metadata.siteName }}</g-link>
      </header>
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
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

h2 {
  font-size: 2rem;
  font-weight: bold;
  line-height: 4.5rem;
}

header {
  min-height: 4.5rem;
}

p {
  padding-top: 1.5rem;
}

.content {
  margin: auto;
  max-width: 800px;
  width: 85vw;
}

.main-container {
  background-image: repeating-linear-gradient(
    white,
    white calc(1.5rem - 1px),
    steelblue 1.5rem
  );
  font-family: Journal;
  font-size: 1.75rem;
  line-height: 1.5rem;
  min-height: 100vh;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  line-height: 4rem;
}
</style>
