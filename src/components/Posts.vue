<template>
    <div class="content_container">
        <div class="post" v-for="blog in displayPosts">
            <h1 class="post-title">
                <router-link :to="'/p/' + blog.slug">
                {{ blog.title }}
                </router-link>
                </h1>
                <div class="post-meta">
                   <font-awesome-icon :icon="['far','calendar-alt']" /> {{ blog.date}}
                </div>
            <div class="post-content">
                <img v-if="blog.coverImage" :src="'../static/posts/' + blog.slug + '/' + blog.coverImage" alt="">
                {{ blog.description }}
            </div>
            <p class="readmore">
                <router-link :to="'/p/' + blog.slug"> 阅读全文 <font-awesome-icon icon="angle-double-right" /> </router-link>
            </p>
        </div>
        <pagination
        :totalPages="totalPages"
        :pageSize="pageSize"
        @update="setCurrentPage"
        :pages= "pages"
        :currentPage="currentPage">
        </pagination>
    </div>
</template>

<script>
    import axios from "axios"
    import pagination from '@/components/Pagination'


    export default {
        name:'posts',
        data(){
            return {
                blogs : [],
                category :  this.$route.params.category || "",
                pageSize : 10,
                currentPage: this.$route.params.page || 1 ,
                totalPages: 1,
                pages: []
            }
        },
        created(){
            let baseUrl = document.location.origin;
            axios.get(baseUrl + '/static/posts.json').then((response)=>{
                this.blogs = this.filterByCategory(response.data);
                this.totalPages = Math.ceil(this.blogs.length / this.pageSize);
                this.setPages();
            })
        },
        methods:{
            setCurrentPage(currentPage) {
               this.currentPage = currentPage;
            },
            setPages(){
                for (let index = 1; index <= this.totalPages; index++) {
                    this.pages.push(index);
                }
            },
            paginate() {
                let currentPage = this.currentPage;
                let pageSize = this.pageSize;
                let from = (currentPage * pageSize) - pageSize;
                let to = (currentPage * pageSize);
                return this.blogs.slice(from, to);
            },
            filterByCategory(blogs){
                if(this.category){
                    return blogs.filter((v)=>{return v.category == this.category});
                }else{
                    return blogs;
                }
            }
        },
        computed:{
            displayPosts(){
                return this.paginate();
            }
        },
        components: { 'pagination':pagination }

    }
</script>

<style scoped>

</style>