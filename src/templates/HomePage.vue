<template>
  <Layout>
    <div v-html="$page.homePage.intro" />
    <div class="grid grid-cols-2">
      <div class="col-span-2 md:col-span-1">
        <h2>Employment</h2>
        <div
          v-for="employment in $page.homePage.employment"
          :key="employment.id"
        >
          <div>
            <g-link :to="employment.path">
              {{ employment.title }}
            </g-link>
          </div>
        </div>
      </div>
      <div class="col-span-2 md:col-span-1">
        <h2>Education</h2>
        <div v-for="education in $page.homePage.education" :key="education.id">
          <div>
            <g-link :to="education.path">
              {{ education.title }}
            </g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  homePage(id: $id) {
    intro
    education {
      title
      path
    }
    employment {
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Home',
  },
};
</script>

<style scoped>
a {
  color: blue;
}
</style>
