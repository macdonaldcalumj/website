<template>
  <div
    class="container sm:container-sm"
    :style="`transform: rotate(` + rotation + `deg)`"
  >
    <g-image class="image" :src="image" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotation: 0,
    };
  },
  mounted() {
    // Set rotation to between -3 and 3
    this.rotation = Math.random() * 6 - 3;
  },
  props: {
    image: String,
  },
};
</script>

<style scoped>
.container {
  background-color: #efefef;
  filter: drop-shadow(3px 3px 2px #aaa);
  height: 18rem;
  margin: 1.5rem auto;
  width: calc(0.83 * 18rem);
}

.image {
  filter: brightness(150%) contrast(80%) sepia(25%);
  margin: auto;
  padding-top: 7%;
  width: 88%;
}

@responsive {
  .container-sm {
    height: 30rem;
    margin: 1.5rem 0;
    width: calc(0.83 * 30rem);
  }
}
</style>
