<template>
   <div class="max-w-2xl mx-auto px-4">
     <div class="flex justify-between items-center mb-6">
        <h2 class=" text-lg lg:text-2xl font-bold text-gray-900">Comentarios</h2>
     </div>
     <form class="mb-6">
       <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
         <label class="sr-only">Tu comentario:</label>
         <textarea id="comment" rows="6" class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none " placeholder="Escribe tu comentario"></textarea>
       </div>
       <div class="flex justify-end">
         <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#2196f3] rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">Enviar</button>
       </div>
     </form>
   </div>
</template>
<script>
export default {
  // definición del componente
  data(){
    return{

    }
  }
}
</script>