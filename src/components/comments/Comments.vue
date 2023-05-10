<template>
    <article class="mx-6 pb-10 ">
        <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900"><img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough">{{ comment.autor }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  <time pubdate datetime="2022-02-08"
                   title="February 8th, 2022">{{ moment(comment.created_at).format("DD/MM/YYYY HH:MM") }}</time></p>
            </div>
        </footer>
        <p class="text-gray-500 dark:text-gray-400">{{ comment.contenido }}</p>
            <hr
            class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
    </article>
 </template>
 
 <script>
 import moment from "moment";
 export default {
  props:{
    comment:Object
  },
  // definición del componente
  data(){
    return{
      
    }
  },
  created() {
    this.moment = moment
     
  },
}
</script>
