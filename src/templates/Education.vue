<template>
  <Layout>
    <h1>{{$page.education.title}}</h1>
    <div>{{$page.education.institute}}</div>
    <div>{{$page.education.start_date}} - {{$page.education.end_date}}</div>
    <div v-html="$page.education.content"/>
    <div v-for="project in $page.education.projects" :key=project.id>
      <g-link :to="project.path" class="article__link">
        {{project.title}}
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  education: education (id: $id) {
    title
    institute
    start_date
    end_date
    content
    projects {
      id
      path
      title
      date
      technologies {
        id
        name
        image
      }
    }
  }
}
</page-query>

<script>
export default {

}
</script>

<style>

</style>