<template>
  <div class="content_container">
    <div class="article">
      <VueShowdown :markdown="blog" />
    </div>
  </div>
</template>

<script>
import VueShowdown from "vue-showdown";
import axios from "axios";

export default {
  name: "page",
  data() {
    return {
      blog: "",
      id: this.$route.params.id
    };
  },
  created() {
    let baseUrl = document.location.origin
    const url = baseUrl + "/static/pages/" + this.id + "/index.md";
    axios.get(url).then(res => {
      let data = res.data;
      let new_body = data.replace(/!\[(.*?)\]\((.*?)\)/g, (match, p1, p2) => {
        if (p2.indexOf("http") > -1) {
          return match;
        } else {
          return `![${p1}](../../static/pages/${this.id}/${p2})`;
        }
      });
      this.blog = new_body;
    });
  }
};
</script>