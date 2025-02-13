<template>
  <div class="mx-auto p-4 md:p-6 text-center">
  <div class="bg-gradient-to-r from-brown-700 to-brown-900 py-20">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-4">Réalisations</h2>
      <p class="text-xl">Quelques exemples de réalisations faites à l’atelier : </p>
    </div>
  </div>

  <section id="realisations" >
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap gap-4 mb-12 justify-center">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          class="px-6 py-2 rounded-full"
          :class="selectedCategory === category ? 'bg-lightGreen text-white' : 'bg-darkGreen text-white hover:bg-gray-300'"
        >
          {{ category }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(work, index) in filteredWorks" 
          :key="index"
          class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          :class="work.category === 'Reproduction de clés' ? 'max-h-[600px]' : 'max-h-[800px]'"
        >
          <div 
            class="relative h-auto"
            :class="work.category === 'Reproduction de clés' ? 'md:h-[600px]' : 'md:h-[800px]'"
            @mouseenter="work.showBefore = true"
            @mouseleave="work.showBefore = false"
            @click="toggleBeforeAfter(work)"
          >
            <img 
              :src="work.beforeImage" 
              :alt="work.title + ' avant'"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
              :class="{ 'opacity-100': !work.showBefore, 'opacity-0': work.showBefore }"
              :style="work.category === 'Reproduction de clés' ? 'object-fit: contain;' : ''"
            >
            <img 
              :src="work.afterImage" 
              :alt="work.title + ' après'"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
              :class="{ 'opacity-0': !work.showBefore, 'opacity-100': work.showBefore }"
              :style="work.category === 'Reproduction de clés' ? 'object-fit: contain;' : ''"
            >
            <div 
              v-if="work.category !== 'Reproduction de clés'"
              class="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded-full text-sm"
            >
              {{ work.showBefore ? 'Après' : 'Avant' }}
            </div>
            <div 
              v-if="work.category !== 'Reproduction de clés'"
              class="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-xs opacity-75"
            >
              <span class="hidden md:inline">{{ work.showBefore ? "Relâchez pour voir l'avant" : "Survolez pour voir l'après" }}</span>
              <span class="md:hidden">{{ work.showBefore ? "Relâchez pour voir l'avant" : "Touchez pour voir l'après" }}</span>
            </div>
          </div>
          <div class="p-6 flex-shrink-0">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-bold text-gray-900">{{ work.title }}</h3>
             <!-- <span class="text-sm text-brown-600 bg-brown-100 px-3 py-1 rounded-full">
                {{ work.category }}
              </span>
            --->
            </div>
            <p class="text-gray-600 mb-4">{{ work.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'RealisationsPage',
  data() {
    return {
      selectedCategory: 'Tous',
      categories: ['Réparation de chaussures', 'Reproduction de clés','Nettoyage et entretien'],
      works: [
        {
          title: 'Boots',
          description: 'Entretien du cuir et nouvelle teinte sur une paire de boots',
          beforeImage: '/img/BootsAvant.jpg',
          afterImage: '/img/BootsAprès.jpg',
          category: 'Nettoyage et entretien',
          showBefore: false
        },
        {
          title:'Nike blazer',
          description: 'Déjaunissement des semelles et nettoyage complet Nike Blazer',
          beforeImage: '/img/nike 1.jpg',
          afterImage: '/img/nike 2.jpg',
          category: 'Nettoyage et entretien',
          showBefore: false
        },
        {
          title:'Raf simons',
          description: 'Déjaunissement des semelles et nettoyage complet Raf Simons',
          beforeImage: '/img/Raf 2.jpg',
          afterImage: '/img/Raf 1.jpg',
          category: 'Nettoyage et entretien',
          showBefore: false
        },
        {
          title: 'Reproduction de clés',
          description: 'Reproduction de clés et badges',
          beforeImage: '/img/Reproduction_resized.jpg',
          afterImage: '/img/Reproduction_resized.jpg',
          category: 'Reproduction de clés',
          showBefore: false
        },
        // Ajoutez d'autres objets work ici si nécessaire
      ]
    }
  },
  computed: {
    filteredWorks() {
      if (this.selectedCategory === 'Tous') {
        return this.works
      }
      return this.works.filter(work => work.category === this.selectedCategory)
    }
  },
  methods: {
    toggleBeforeAfter(work) {
      work.showBefore = !work.showBefore;
    }
  }
}
</script>

<style scoped>
@media (hover: hover) and (pointer: fine) {
  /* Styles pour les appareils avec hover */
  .group:hover .group-hover\:opacity-100 {
    opacity: 1;
  }
}

@media (hover: none) and (pointer: coarse) {
  /* Styles pour les appareils tactiles */
  .group:active .group-hover\:opacity-100 {
    opacity: 1;
  }
}
</style>
