<template>
<section class="bg-gray-50">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Inicia Sesión
              </h1>
              <form class="space-y-4 md:space-y-6" @submit.prevent="login" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Tu correo:</label>
                      <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        placeholder="name@company.com" 
                        required=""
                        v-model="email"
                      >
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Contraseña</label>
                      <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="••••••••" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                        required=""
                        v-model="password"
                        >
                  </div>
                  <div class="flex justify-center">
                      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">Ingresar</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null,
        };
    },
    methods: {
        login() {
            this.$store
                .dispatch("retrieveToken", {
                    email: this.email,
                    password: this.password
                })
                .then(response => {
                    this.$router.push({ name: "Admin" });
                })
                .catch(error => {
                    console.log(error);
                    this.error =error
                });
        }
    }
};
</script>