<template>
  <div class="pure-u-1 pure-u-md-3-4">
    <div id="footer">
      <p><a href="https://github.com/mzhren/VueMarkdownBlog">VueMarkdownBlog</a> by  <a href="http://www.mzh.ren/" rel="nofollow">码中人</a></p> 
      <p v-html="siteConfigs.copyright"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "copyright",
  props:["siteConfigs"]
};
</script>

<style scoped>
</style>