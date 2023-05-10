<template>
    <main class="max-w-2xl mx-auto">
      <!-- <div v-for="post in posts"  :key="post.id" class="my-10 px-4 bg-white rounded-lg border border-gray-200 shadow-md"> -->
        <!-- <PostCard :post="id"/> -->
        {{id}}
      <!-- </div> -->
    </main>
</template>

<script lang="ts">
import PostCard from '../components/posts/PostCard.vue';
export default {
    components: { PostCard },
    props:{
        id:Number,
    },
     computed:{
    //     posts (){
    //         return this.$store.state.posts
    },

    // },
    created () {
    //     this.$store.dispatch('getPost')
     },
}
</script>