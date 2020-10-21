<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <div class="container">
      <h1>List education</h1>
      <div v-for="education in $page.education.edges" :key="education.id" class="projects d-flex">
        <div class="article__body">
          <g-link :to="education.node.path" class="article__link">
            <h1 class="article__title">{{education.node.title}}</h1>
          </g-link>
        </div>
      </div>
    </div>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<page-query>
query($id: ID!) {
  projects: allProject {
    edges {
      node {
        title
        path
      }
    }
  },
  employment: allEmployment {
    edges {
      node {
        title
        path
      }
    }
  }
  education: allEducation {
    edges {
      node {
        title
        path
      }
    }
  }
  homePage(id: $id) {
    intro
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
