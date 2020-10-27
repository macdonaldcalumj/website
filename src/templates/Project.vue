<template>
  <Layout>
    <h1>{{ $page.project.title }}</h1>
    <div>{{ $page.project.date }}</div>
    <Polaroid :image="$page.project.image" />
    <div>Technologies:</div>
    <div v-for="technology in $page.project.technologies" :key="technology.id">
      <TechnologyDisplay :technology="technology" />
    </div>
    <div v-html="$page.project.content" />
    <div class="grid grid-cols-2">
      <div
        class="extra-image-container col-span-2 md:col-span-1"
        v-for="image in $page.project.extraImages"
        :key="image.id"
      >
        <Polaroid :image="image" />
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
import Polaroid from '@/components/Polaroid.vue';
import TechnologyDisplay from '@/components/TechnologyDisplay.vue';

export default {
  components: {
    Polaroid,
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
  margin-top: 1.5rem;
}
</style>
