<template>
  <Layout>
    <h1>{{ $page.project.title }}</h1>
    <g-image class="main-image" :src="$page.project.image" />
    <div>Date: {{ $page.project.date }}</div>
    <div>Technologies:</div>
    <div
      class="tech-container"
      v-for="technology in $page.project.technologies"
      :key="technology.id"
    >
      <TechnologyDisplay :technology="technology" />
    </div>
    <div v-html="$page.project.content" />
    <div class="grid grid-cols-2">
      <div
        class="extra-image-container col-span-2 md:col-span-1"
        v-for="image in $page.project.extraImages"
        :key="image.id"
      >
        <g-image class="extra-image" :src="image" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  project: project(id: $id) {
    title
    image
    date
    technologies {
      id
      name
      image
    }
    content
    extraImages
  }
}
</page-query>

<script>
import TechnologyDisplay from '@/components/TechnologyDisplay.vue';

export default {
  components: {
    TechnologyDisplay,
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: bold;
  line-height: 4.5rem;
}

.extra-image {
  margin: auto;
  width: 80%;
}

.extra-image-container {
  margin: 1.5rem 0;
}

.main-image {
  height: 15rem;
  margin-bottom: 1.5rem;
}

.tech-container {
  margin-left: 5rem;
}
</style>
