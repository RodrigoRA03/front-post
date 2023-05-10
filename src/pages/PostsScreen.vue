<template>
    <main class="max-w-2xl mx-auto">
      <Navbar />
      <div v-for="post in posts"  :key="post.id" class="my-32 px-4 bg-white rounded-lg border border-gray-200 shadow-md">
        <PostCard :post="post" :isPostSelect="false"/>
      </div>
    </main>
</template>

<script>

import PostCard from '../components/posts/PostCard.vue';
import Navbar from '../components/template/Navbar.vue';

export default {
    components: { PostCard , Navbar },
    computed:{
        posts (){
            return this.$store.state.posts
        },
    },
    created () {
        this.$store.dispatch('getPost')
    },
}
</script>
