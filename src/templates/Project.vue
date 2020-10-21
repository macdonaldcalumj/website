<template>
  <Layout>
    <h1>{{$page.project.title}}</h1>
    <div>{{$page.project.date}}</div>
    <div v-for="technology in $page.project.technologies" :key=technology.id>
      {{technology.name}}
      <g-image :alt=technology.name :src=technology.image />
    </div>
    <div v-html="$page.project.content"/>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  project: project (id: $id) {
    title
    date
    technologies {
      id
      name
      image
    }
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.project.title
    }
  }
}
</script>

<style>

</style>