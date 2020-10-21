<template>
  <Layout>
    <div v-html="$page.homePage.intro" />
    <div class="container">
      <h2>Employment</h2>
      <div
        v-for="employment in $page.homePage.employment"
        :key="employment.id"
        class="projects d-flex"
      >
        <div class="article__body">
          <g-link :to="employment.path" class="article__link">
            {{ employment.title }}
          </g-link>
        </div>
      </div>
      <h2>Education</h2>
      <div
        v-for="education in $page.homePage.education"
        :key="education.id"
        class="projects d-flex"
      >
        <div class="article__body">
          <g-link :to="education.path" class="article__link">
            {{ education.title }}
          </g-link>
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

<style></style>
