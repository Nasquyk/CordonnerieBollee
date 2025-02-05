<template>
  <div class="bg-cream-50 py-20">
    <div class="max-w-3xl mx-auto">
      <h2 
        ref="titleRef" 
        class="flex flex-center justify-center text-3xl font-bold mb-8 opacity-0"
      >
        Mes prestations
      </h2>

      <div class="grid grid-cols-1 gap-12">
        <div 
          v-for="(service, index) in services" 
          :key="index" 
          ref="serviceRefs"
          class="service-item opacity-0"
        >
          <div class="relative overflow-hidden rounded-lg">
            <img 
              :src="service.image" 
              :alt="service.title" 
              class="w-full h-64 object-cover"
            >
            <div class="absolute inset-0 bg-black h-64 bg-opacity-40 flex items-center justify-center">
              <h3 class="text-white text-lg md:text-xl font-semibold">
                {{ service.title }}
              </h3>
            </div>
          </div>
          <div class="p-6">
            <HtmlContent :content="service.description" class="text-brown-700" />
            <ul class="mt-4 space-y-2 text-brown-700">
              <li v-for="(item, idx) in service.features" :key="idx">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="text-center mt-8">
        <NuxtLink to="/realisation">
          <button 
            ref="buttonRef"
            class="bg-lightGreen text-white px-6 py-3 rounded-md hover:bg-darkGreen duration-300 opacity-0"
          >
            Découvrez mes realisations
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import france from '../public/svg/Flag_of_France.svg'
import HtmlContent from '../components/HtmlContent.vue'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Reactive references
const titleRef = ref(null)
const serviceRefs = ref([])
const buttonRef = ref(null)

// Services data
const services = [
  {
    title: 'Réparation de chaussures',
    image: '/path/to/shoe-repair-image.jpg',
    description: `Service rapide et professionnel de restauration de chaussure. Nous utilisons des produits de haute qualité pour garantir une restauration parfaite. Je travail avec des produits de qualité française <img src="${france}" class="w-6 h-6" alt="drapeau de la france"> et italienne pour garantir une restauration parfaite.`,
    features: [
      'Ressemblage complet',
      'Reparation du talon',
      'Couture et recollage',
      'Stretching et recollage'
    ]
  },
  {
    title: 'Reproduction de clés',
    image: '/path/to/key-reproduction-image.jpg',
    description: 'Service rapide et précis de reproduction de clés. Nous utilisons des équipements modernes pour garantir des duplicatas parfaits.',
    features: [
      'Clés de maison',
      'Clés de voiture',
      'Clés à points',
      'Télécommandes'
    ]
  },
  {
    title: 'Nettoyage et entretien',
    image: '/path/to/cleaning-service-image.jpg',
    description: 'Service complet de nettoyage et d\'entretien pour vos chaussures et accessoires.',
    features: [
      'Nettoyage profond',
      'Traitement anti-taches',
      'Restauration de couleur',
      'Protection et imperméabilisation'
    ]
  }
]

// Animation setup
onMounted(() => {
  // Title animation
  gsap.to(titleRef.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: titleRef.value,
      start: 'top 80%'
    }
  })

  // Services animation
  gsap.utils.toArray(serviceRefs.value).forEach((service, index) => {
    gsap.to(service, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: index * 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: service,
        start: 'top 80%'
      }
    })
  })

  // Button animation
  gsap.to(buttonRef.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: buttonRef.value,
      start: 'top 90%'
    }
  })
})
</script>

<style scoped>
.bg-cream-50 {
  background-color: #FFFBEF;
}

.text-brown-700 {
  color: #5C4033;
}

.service-item,
h2,
button {
  transform: translateY(50px);
}
</style>