<template>
  <div class="mx-auto p-4 md:p-6 text-center">
    <div class="bg-gradient-to-r from-brown-700 to-brown-900 py-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-4">Réalisations</h2>
        <p class="text-xl">Quelques exemples de réalisations faites à l'atelier : </p>
      </div>
    </div>

    <section id="realisations">
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
          >
            <div 
              class="relative w-full"
              :style="{
                height: getImageHeight(work.category)
              }"
              @click="toggleBeforeAfter(work)"
            >
              <img 
                :src="work.beforeImage" 
                :alt="work.title + ' avant'"
                class="absolute inset-0 w-full h-full transition-opacity duration-300"
                :class="{ 
                  'opacity-100': !work.showBefore, 
                  'opacity-0': work.showBefore,
                  'object-contain': work.category === 'Reproduction de clés',
                  'object-cover': work.category !== 'Reproduction de clés'
                }"
                @mouseover="showAfter(work, true)" @mouseleave="showAfter(work, false)"
              >
              <img 
                :src="work.afterImage" 
                :alt="work.title + ' après'"
                class="absolute inset-0 w-full h-full transition-opacity duration-300"
                :class="{ 
                  'opacity-0': !work.showBefore, 
                  'opacity-100': work.showBefore,
                  'object-contain': work.category === 'Reproduction de clés',
                  'object-cover': work.category !== 'Reproduction de clés'
                }"
                @mouseover="showAfter(work, true)" @mouseleave="showAfter(work, false)"
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
                <span class="md:hidden">Touchez pour voir {{ work.showBefore ? "l'avant" : "l'après" }}</span>
              </div>
            </div>
            <div class="p-6 flex-shrink-0">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-bold text-gray-900">{{ work.title }}</h3>
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
      categories: ['Réparation de chaussures', 'Reproduction de clés', 'Nettoyage et entretien'],
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
        }
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
    },
    showAfter(work, show) {
      if (window.innerWidth >= 768) {
        work.showBefore = show;
      }
    },
    getImageHeight(category) {
      // Sur mobile (vérifie si la fenêtre fait moins de 768px)
      if (window.innerWidth < 768) {
        return '400px';
      }
      
      // Sur PC
      if (category === 'Reproduction de clés') {
        return '300px';
      }
      return '600px'; // Images plus grandes pour les autres catégories sur PC
    }
  },
  mounted() {
    // Ajouter un listener pour mettre à jour les hauteurs lors du redimensionnement
    window.addEventListener('resize', () => {
      this.$forceUpdate();
    });
  },
  beforeDestroy() {
    // Nettoyer le listener
    window.removeEventListener('resize', () => {
      this.$forceUpdate();
    });
  }
}
</script>