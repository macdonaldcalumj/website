<template>
  <div class="main-container">
    <div class="content">
      <header class="grid grid-cols-3">
        <div class="col-span-3 md:col-span-2">
          <g-link class="title" to="/">{{ $static.metadata.siteName }}</g-link>
        </div>
        <div class="links col-span-3 md:col-span-1 md:links-md">
          <a href="https://github.com/macdonaldcalumj" target="_blank">
            <g-image
              class="link-image"
              alt="GitHub"
              title="GitHub"
              src="/images/github.png"
            />
          </a>
          <a href="https://www.instagram.com/ohmygolly1/" target="_blank">
            <g-image
              class="link-image"
              alt="Instagram"
              title="Instagram"
              src="/images/instagram.png"
            />
          </a>
        </div>
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
  user-select: none;
}

p {
  padding-top: 1.5rem;
}

ul li:before {
  content: '\002D \0020';
}

.content {
  margin: auto;
  max-width: 800px;
  width: 85vw;
}

.link-image {
  height: 2rem;
}

.links {
  align-items: center;
  display: flex;
  height: 100%;
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

@responsive {
  .links-md {
    justify-content: flex-end;
  }
}
</style>
