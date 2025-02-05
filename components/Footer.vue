<template>
  <footer class="w-full text-white bg-brown body-font">
    <div class="container flex flex-col flex-wrap px-5 py-10 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
      <div class="flex-shrink-0 w-full md:w-64 mx-auto text-center md:mx-0 md:text-left">

        <p class="mb-3 text-ms font-medium tracking-widest text-white uppercase title-font underline">Mes reseaux</p>
        <div class="mt-4 ">
          <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a href="https://www.facebook.com/BQTCouverture" target="_blank" class="text-neutral-50 cursor-pointer duration-300 hover:text-neutral-300">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div class="flex flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
        <div class="w-full px-4 lg:w-1/2 md:w-1/2">
          <h2 class="mb-3 text-ms font-medium tracking-widest text-white uppercase title-font underline">Information
          </h2>
          <nav class="mb-10 list-none">
            <li class="mt-3">
              <router-link to="/prestation"><a class="text-white cursor-pointer hover:text-neutral-300" @click.prevent="navigateAndScrollToTop('/prestation')">Prestations</a></router-link>
            </li>
            <li class="mt-3">
              <router-link to="/tarif"><a class="text-white cursor-pointer hover:text-neutral-300" @click.prevent="navigateAndScrollToTop('/tarifs')">Tarifs</a></router-link>
            </li>
            <li class="mt-3">
              <router-link to="/realisation"><a class="text-white cursor-pointer hover:text-neutral-300" @click.prevent="navigateAndScrollToTop('/realisation')">Réalisations</a></router-link>
            </li>
            
          </nav>
        </div>
        <div class="w-full px-4 lg:w-1/2 md:w-1/2">
          <h2 class="mb-3 text-ms font-medium tracking-widest text-white uppercase title-font underline">Contact</h2>
          <nav class="mb-10 list-none">
            <li class="mt-3">
              <router-link to="/contact"><a class="text-white cursor-pointer hover:text-neutral-300" @click.prevent="navigateAndScrollToTop('/contact')">Me contacter</a></router-link>
            </li>
            <li class="mt-3">
              <a class="text-white cursor-pointer hover:text-neutral-300">06 08 63 83 32</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div>
      <div class="justify-center text-center">
        <p>&copy; 2024 <a href="https://portfolio-gold-five-56.vercel.app/" target="_blank">Victorien.corbel</a>. Tous droits réservés.</p>

      </div>
    </div>
  </footer>


</template>

<script>
export default {
  methods: {
    navigateAndScrollToTop(url) {
    
      this.$router.push(url);

     
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  }
}
</script>

<style scoped>

</style>
