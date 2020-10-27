<template>
  <Layout>
    <h1>{{ $page.education.title }}</h1>
    <div>{{ $page.education.institute }}</div>
    <div>{{ $page.education.start_date }} - {{ $page.education.end_date }}</div>
    <div v-html="$page.education.content" />
    <div v-if="$page.education.projects">
      <h3>Projects:</h3>
      <div class="grid grid-cols-2">
        <div
          class="col-span-2 md:col-span-1"
          v-for="project in $page.education.projects"
          :key="project.id"
        >
          <g-link :to="project.path">
            <Polaroid :image="project.image" :title="project.title" />
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  education: education(id: $id) {
    title
    institute
    start_date
    end_date
    content
    projects {
      id
      path
      title
      image
    }
  }
}
</page-query>

<script>
import Polaroid from '@/components/Polaroid.vue';

export default {
  components: {
    Polaroid,
  },
  metaInfo() {
    return {
      title: this.$page.education.title,
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

h3 {
  margin-top: 1.5rem;
}
</style>
