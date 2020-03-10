<template>
  <div id="header">
    <div class="site-name">
      <h1 class="hidden">{{ siteConfigs.title }}</h1>
      <a id="logo" href="/.">{{ siteConfigs.title }}</a>
      <p class="description">{{ siteConfigs.description }}</p>
    </div>
    <div id="nav-menu">
      <router-link to="/">
        <font-awesome-icon icon="home" />  首页
      </router-link>
      <router-link to="/archives/year">
        <font-awesome-icon icon="archive" /> 归档
      </router-link>
      <!-- <a href="/tags/">
        <font-awesome-icon icon="tags" />  标签
      </a>-->
      <router-link to="/page/about">
        <font-awesome-icon icon="user" />  关于
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "customHeader",
  props: ["siteConfigs"]
};
</script>

<style scoped>
</style>