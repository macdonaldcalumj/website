<template>
  <Layout>
    <h1>{{$page.employment.title}}</h1>
    <div>{{$page.employment.role}}</div>
    <div>{{$page.employment.start_date}} - {{$page.employment.end_date}}</div>
    <div v-html="$page.employment.content"/>
    <div v-for="project in $page.employment.projects" :key=project.id>
      <g-link :to="project.path" class="article__link">
        {{project.title}}
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  employment: employment (id: $id) {
    title
    role
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