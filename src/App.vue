<template>
  <div id="app" class="body_container">
    <top :siteConfigs = "siteConfigs"></top>
    <div id="layout" class="pure-g">
      <div class="pure-u-1 pure-u-md-3-4">
        <router-view/>
        <copyright :siteConfigs = "siteConfigs"></copyright>
      </div>
      <sidebar></sidebar>

    </div>
  </div>
</template>

<script>
import top  from "@/components/Head";
import sidebar  from "@/components/Sidebar";
import copyright  from "@/components/Copyright";

import axios from "axios"


export default {
  name: 'App',
  data(){
    return {
      'siteConfigs': {
          "title" : "寂寞我就撸",
          "description":"只要我撸得够快，寂寞就抓不住我",
          "author":"狂奔的男尸",
          "author_link":"http://www.mzh.ren/",
          "copyright":"Copyright © 2020<a href='http://blog.jmwjl.com'>寂寞我就撸</a>  | <a rel='nofollow' target='_blank' href='http://www.beian.miit.gov.cn/'>粤ICP备14094633号</a>"
      }
    }
  },
  components: {
    top,sidebar,copyright
  },
  created(){
    let baseUrl = document.location.origin;
    axios.get(baseUrl + '/static/site_config.json').then((response)=>{
        this.siteConfigs = response.data;
    })
  }
}
</script>


<style src="./assets/style.css"></style>
<style src="./assets/pure-min.css"></style>
<style src="./assets/normalize.min.css"></style>
<style src="./assets/grids-responsive-min.css"></style>
