<template>
    <main class="max-w-2xl mx-auto">
      <Navbar/>
      <div class="my-32 px-4 bg-white rounded-lg border border-gray-200 shadow-md">
        <PostCard v-if="post" :post="post" :isPostSelect="true"/>
        <CommentTextArea v-if="id" :id="id"/>
        <div v-if="post" v-for="comment in post.comments" :key="comment.id">
          <Comments :comment="comment"/>
        </div>
      </div>
    </main>
</template>

<script lang="ts">
import PostCard from '../components/posts/PostCard.vue';
import CommentTextArea from '../components/comments/CommentTextArea.vue';
import Comments from '../components/comments/Comments.vue';
import Navbar from '../components/template/Navbar.vue';


export default {
  components: { PostCard , CommentTextArea, Comments , Navbar },
  props:{id:String},
  computed:{
      post(){
      return this.$store.state.postSelected
     },
  },
  created () {
        this.$store.dispatch('showPost',{
        id:Number(this.id)
    })
  },
}
</script>