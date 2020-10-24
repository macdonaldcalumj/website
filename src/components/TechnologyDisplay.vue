<template>
  <div class="container">
    <g-image :src="technology.image" />
    {{ technology.name }}
  </div>
</template>

<script>
export default {
  props: {
    technology: Object,
  },
};
</script>

<style scoped>
.container {
  align-items: center;
  display: flex;
  height: 4.5rem;
}

img {
  height: 1.5em;
  padding-right: 0.5em;
}
</style>
