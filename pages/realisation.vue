<template>
  <div class="min-h-screen bg-[#faf0e6] p-8">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <h1 class="text-3xl font-bold text-brown-800 mb-8 text-center">Mes réalisations</h1>
      
      <!-- Sections de projets -->
      <div class="space-y-16">
        <div v-for="(projet, index) in projets" :key="projet.id" 
             class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center" 
             :class="{ 'md:flex-row-reverse': index % 2 !== 0 }">
          <!-- Image Avant -->
          <div class="md:col-span-5 relative">
            <nuxt-img
              :src="projet.avant"
              :alt="`Projet ${projet.id} avant`"
              class="w-full aspect-video object-cover rounded-lg"
              placeholder
              @error="handleImageError"
            />
            <span class="absolute top-4 left-4 font-medium bg-white px-3 py-1 rounded-full">Avant</span>
          </div>

          <!-- Image Après -->
          <div class="md:col-span-5 relative">
            <nuxt-img
              :src="projet.apres"
              :alt="`Projet ${projet.id} après`"
              class="w-full aspect-video object-cover rounded-lg"
              placeholder
              @error="handleImageError"
            />
            <span class="absolute top-4 left-4 font-medium bg-white px-3 py-1 rounded-full">Après</span>
          </div>

          <!-- Texte d'information -->
          <div class="md:col-span-2 flex items-center text-center md:text-left">
            <p class="text-sm text-gray-600">{{ projet.info }}</p>
          </div>
        </div>
        <div class="flex justify-center">
          <ImageComparison 
            :imageBefore="imageBefore"
            :imageAfter="imageAfter"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ImageComparison from '@/components/ImageComparison.vue';

const imageBefore = "/img/chaussureblanche_sale.jpg";
const imageAfter = "/img/chaussureblanche.png";
// Importation directe des images
const projets = [

  {
    id: 1,
    avant: new URL('@/assets/img/antique-keys.jpg', import.meta.url).href,
    apres: new URL('@/assets/img/img1.png', import.meta.url).href,
    info: 'Information sur le projet 1'
  },
  {
    id: 2,
    avant: new URL('@/assets/img/antique-keys.jpg', import.meta.url).href,
    apres: new URL('@/assets/img/img1.png', import.meta.url).href,
    info: 'Information sur le projet 2'
  },
  {
    id: 3,
    avant: new URL('@/assets/img/antique-keys.jpg', import.meta.url).href,
    apres: new URL('@/assets/img/img1.png', import.meta.url).href,
    info: 'Information sur le projet 3'
  }
];


</script>

<style scoped>
.nuxt-img:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

@media (min-width: 768px) {
  .md\:flex-row-reverse {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
