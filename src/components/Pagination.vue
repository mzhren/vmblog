<template>
    <div class="page-navigator" v-if="totalPages > 0">
        <nav>
                <span v-if="currentPage != 1" class="prev" @click="updateCurrentPage(currentPage - 1)">
                     <font-awesome-icon icon="arrow-left" /> 上一页 
                </span>
                <span v-for="page in pages" @click="$emit('update', page)"  :class="page == currentPage ? 'current':''">
                        {{ page }}
                </span>
                <span v-if="currentPage < totalPages" class="next" @click="updateCurrentPage(currentPage +1)">
                      下一页   <font-awesome-icon icon="arrow-right" />
                </span>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name:'pagination',
        props:['totalPages','currentPage','pageSize','pages'],
        data(){
            return {

            }
        },
        methods:{
            updateCurrentPage(currentPage){ 
                this.$emit('update',currentPage)
            }
            
        }

    }
</script>

<style scoped>

</style>