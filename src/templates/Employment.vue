<template>
  <Layout>
    <h1>{{ $page.employment.title }}</h1>
    <div>{{ $page.employment.role }}</div>
    <div>
      {{ $page.employment.start_date }} - {{ $page.employment.end_date }}
    </div>
    <div v-html="$page.employment.content" />
    <div v-if="$page.employment.projects">
      <h3>Projects:</h3>
      <div class="grid grid-cols-2">
        <div
          class="col-span-2 md:col-span-1"
          v-for="project in $page.employment.projects"
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
  employment: employment(id: $id) {
    title
    role
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
      title: this.$page.employment.title,
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
