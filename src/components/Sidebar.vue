<template>
  <div class="pure-u-1-4 hidden_mid_and_down">
    <div id="sidebar">
      <div class="widget">
        <form
          class="search-form"
          action="//www.google.com/search"
          method="get"
          accept-charset="utf-8"
          target="_blank"
        >
          <input type="text" name="q" maxlength="20" placeholder="Search" />
          <input type="hidden" name="sitesearch" value="http://www.jmwjl.com/" />
        </form>
      </div>
      <div class="widget">
        <div class="widget-title">
          <font-awesome-icon :icon="['far','folder-open']" />  分类
        </div>
        <ul class="category-list">
          <li v-for="category in categories">
            <router-link :to="'/c/' + category.slug" @click.native="refresh">{{ category.name }}</router-link>
          </li>
        </ul>
      </div>
     
      <div class="widget">
        <div class="widget-title">
          <font-awesome-icon icon="external-link-alt" />  友情链接
        </div>
        <ul>

          <li v-for="link in blogroll">
            <a :href="link.url" :title="link.site" target="_blank">{{ link.site }}</a>
          </li>
          
        </ul>
      </div>

      <div class="widget">
        <div class="widget-title">
          <font-awesome-icon icon="external-link-alt" />  广告
        </div>
        <ul>

          <li v-for="link in ads">
            <a :href="link.url" :title="link.ads" target="_blank">{{ link.ads }}</a>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "sidebar",
  data() {
    return {
      categories: [],
      blogroll: [],
      ads:[]
    };
  },

  methods:{
    refresh(){
　　　　　　this.$router.go(0);  
　　　　}
  },

  created() {
    let baseUrl = document.location.origin;
    axios.get(baseUrl + "/static/config/sidebar.json").then(response => {
      this.categories = response.data.categories;
      this.blogroll = response.data.blogroll;
      this.ads = response.data.ads;
    });

    // axios.get(baseUrl + "/static/category.json").then(response => {
    //   this.categories = response.data;
    // });

    // axios.get(baseUrl + "/static/blogroll.json").then(response => {
    //   this.blogroll = response.data;
    // });

    // axios.get(baseUrl + "/static/ads.json").then(response => {
    //   this.ads = response.data;
    // });
  }
};
</script>

<style scoped>
</style>