<template>
  <div class="py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto lg:mt-16">
      <div class="absolute inset-0 bg-gradient-to-r from-darkGreen to-lightGreen shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div class="text-white relative px-4 py-10 bg-[#628B3F] shadow-lg sm:rounded-3xl sm:p-20">
        <div class="text-center pb-6">
          <h1 class="text-3xl">Contactez moi !</h1>
          <p class="text-gray-300">Une question ? contactez moi !</p>
        </div>
        <form action="https://formsubmit.co/your@email.com" method="POST">
          <input
            class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Nom"
            name="name"
            pattern="[A-Za-zÀ-ÿ '-]{1,50}"
            title="Le nom ne doit contenir que des lettres, des espaces, des apostrophes et des tirets."
            required
          />
          <input
            class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Veuillez entrer une adresse email valide."
            required
          />
          <input
            class="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Sujet"
            name="sujet"
            pattern=".{1,100}"
            title="Le sujet doit contenir entre 1 et 100 caractères."
            required
          />
          <textarea
            class="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Taper votre message ici..."
            name="message"
            pattern=".{1,500}"
            title="Le message doit contenir entre 1 et 500 caractères."
            required
            style="height: 121px;"
          ></textarea>
          <div class="flex justify-between">
            <input
              class="shadow bg-brown hover:bg-[#54361f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Envoyer ➤"
            />
            <input
              class="shadow bg-brown hover:bg-[#54361f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="reset"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>