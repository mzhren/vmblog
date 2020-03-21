<template>
  <div class="content_container">
    <div class="article">
      <VueShowdown :markdown="blog" flavor="github" :options="{ emoji: true }" />
    </div>
    <br>
    <h3>发表评论</h3>
    <div id="vcomments"></div>
  </div>
</template>

<script>
import VueShowdown from "vue-showdown";
import axios from "axios";

window.AV = require("leancloud-storage");

// Use import
import Valine from "valine";

export default {
  name: "post",
  data() {
    return {
      blog: "",
      id: this.$route.params.id
    };
  },
  mounted() {
    new Valine({
      el: "#vcomments",
      appId: "PmIcxexLw4DjaBA6jHvfFM5f-gzGzoHsz",
      appKey: "3V3gyODpBhiVIk49DTTOdDrn",
      // other config
      notify: false,
      verify: false,
      avatar: "mp",
      placeholder: "请留下您的观点！",
      path:window.location.href
    });
  },
  created() {
    const md_url = "../../static/posts/" + this.id + "/index.md";
    axios.get(md_url).then(res => {
      let data = res.data;
      let new_body = data.replace(
        /!\[(.*?)\]\(((?!http).*?)\)/g,
        (match, p1, p2) => {
          return `![${p1}](../../static/posts/${this.id}/${p2})`;
        }
      );
      this.blog = new_body;
    });

    const json_url = "../../static/posts/" + this.id + "/index.json";
    axios.get(json_url).then(res => {
      let data = res.data;
      if (data.title) {
        document.title = data.title + " 寂寞我就撸";
        let meta = document.createElement("meta");
        meta.name = "description";
        meta.content = data.description;
        document.head.appendChild(meta);
      }
    });
  }
};
</script>

