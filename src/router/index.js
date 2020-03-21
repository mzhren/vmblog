import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import Post from '@/components/Post'
import Page from '@/components/Page'
import Archives from '@/components/Archives'


Vue.use(Router)


export default new Router({
  mode:'hash',
  routes: [
    {
      path: '',
      name: 'home',
      component:  Posts,
      meta: { title: '首页' }
    },
    {
      path: '/:page',
      name: 'postlist',
      component: Posts,
      meta: { title: '首页' }
    },
    {
      path: '/p/:id',
      name: 'post',
      component: Post,
      meta: { title: '博客' }
    },
    {
      path: '/c/:category',
      name: 'category',
      component: Posts,
      meta: { title: '分类' }
    },
    {
      path: '/archives/year',
      name: 'archive',
      component: Archives,
      meta: { title: '归档' }
    },
    {
      path: '/page/:id',
      name: 'page',
      component: Page,
      meta: { title: '页面' }
    }
  ]
})
