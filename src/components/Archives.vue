<template>
  <div class="content_container">
    <div class="post">
      <div class="post-archive">
        <h1>文章归档</h1>
        <section v-for="year in years">
          <h2>{{ year }}</h2>
          <ul class="listing">
            <li v-for="blog in archives[year]">
              <router-link :to="'/p/' + blog.slug">{{ blog.title }}</router-link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "archives",
  data() {
    return {
      archives: {},
      years: []
    };
  },
  created() {
    let baseUrl = document.location.origin;
    axios.get(baseUrl + "/static/posts.json").then(response => {
      this.archives = this.groupByYears(response.data);
      this.years = Object.keys(this.archives).reverse();
    });
  },
  methods: {
    groupByYears(blogs) {
      let archives = {};
      blogs.forEach(v => {
        let date = new Date(v.date);
        let year = date.getFullYear();
        if (archives[year]) {
          archives[year].push(v);
        } else {
          archives[year] = [v];
        }
      });
      return archives;
    }
  }
};
</script>

<style scoped>
</style>