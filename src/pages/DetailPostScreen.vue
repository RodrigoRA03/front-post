<template>
    <main class="max-w-2xl mx-auto">
      <div class="my-10 px-4 bg-white rounded-lg border border-gray-200 shadow-md">
        <PostCard v-if="post" :post="post" :isPostSelect="true"/>
        <CommentTextArea/>
        <div class="" v-for="comment in post.comments" :key="comment.id">
          <Comments :comment="comment"/>
        </div>
      </div>
    </main>
</template>

<script lang="ts">
import PostCard from '../components/posts/PostCard.vue';
import CommentTextArea from '../components/comments/CommentTextArea.vue';
import Comments from '../components/comments/Comments.vue';


export default {
    components: { PostCard , CommentTextArea, Comments },
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