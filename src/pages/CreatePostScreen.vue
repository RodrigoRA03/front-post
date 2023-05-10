<template>
    <main class="max-w-2xl mx-auto">
        <form autocomplete="off" @submit.prevent="createPost" method="post">
          <div class="my-3">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Titulo</label>
            <input 
              type="text" 
              id="first_name" 
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
              placeholder="Escribe un titulo" 
              v-model="titulo"
              required
            >
          </div>
          <div class="my-3">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Contenido</label>
            <textarea 
              id="message" 
              rows="4" 
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " 
              placeholder="Escribe tus ideas"
              v-model="contenido"
            ></textarea>
          </div>
          <div class="my-3">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Fecha Publicación</label>
            <input 
              type="date" 
              id="first_name" 
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
              placeholder="Escribe un titulo" 
              required
              v-model="fecha_publicacion"
            >
          </div>
          <div class="flex justify-center">
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">Guardar</button>
        </div>
       </form>
    </main>
</template>

<script>
import PostCard from '../components/posts/PostCard.vue';
export default {
    components: { PostCard },
    data() {
        return {
            fecha_publicacion: null,
            contenido: null,
            titulo:null
        };
    },
    methods: {
        createPost() {
            this.$store
                .dispatch("createPost", {
                    titulo: this.titulo,
                    contenido: this.contenido,
                    fecha_publicacion: this.fecha_publicacion
                })
                .then(response => {
                    this.$router.push('/listar-posts');
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>

<style lang="">
    
</style>