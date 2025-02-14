<template>
  <div class=" py-20">
    <div class="max-w-3xl mx-auto">
      <h2 
        ref="titleRef" 
        class="flex flex-center justify-center text-3xl font-bold mb-8 opacity-0"
      >
        Prestations
      </h2>

      <div class="grid grid-cols-1 gap-12">
    
        
        
        <div 
          v-for="(service, index) in services" 
          :id="service.id"
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
            <div class="absolute inset-0 bg-black h-64 bg-opacity-40 flex items-center justify-center w-full">
              <h3 class="text-white text-lg md:text-xl font-semibold">
                {{ service.title }}
              </h3>
            </div>
          </div>
          <div class="p-6">
            <HtmlContent :content="service.description" class="text-gray-700 text-lg md:text-2xl" />
            <ul class="mt-4 space-y-2 text-lg md:text-2xl">
              <li v-for="(item, idx) in service.features" :key="idx">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>

      <div class="text-center mt-8">
        <NuxtLink to="/realisation">
          <button 
            ref="buttonRef"
            class="bg-lightGreen text-white px-6 py-3 rounded-md hover:bg-darkGreen duration-300 opacity-0"
          >
            Découvrez mes réalisations
          </button>
        </NuxtLink>
      </div>  
    </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import france from '../public/svg/Flag_of_France.svg'
import italy from '../public/svg/Flag_of_Italy.svg'
import HtmlContent from '../components/HtmlContent.vue'

import tableAvecMachine from '@/assets/img/tableAvecMachine.jpg';

import clef from '@/assets/img/clefService.jpg'
import nettoyage from '@/assets/img/produit.jpg'






// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Reactive references
const titleRef = ref(null)
const serviceRefs = ref([])
const buttonRef = ref(null)

// Services data
const services = [
  {
    id: 'reparation-chaussures',
    title: 'Réparation de chaussures',
    image: tableAvecMachine, // Corrected path
    description: `Formé en cordonnerie traditionnelle, tout en cherchant à ajouter une touche de modernité à vos réparations, je vous propose à l’atelier : `,
    features: [
      '- Pose de patins',
      '- Remplacement des talons',
      '- Ressemelage complet',
      '- Remplacement de la première de propreté',
      '- Remplacement glissoire/antiglissoire ',
      '- Recollage', 
      '- Réparations sneakers',
      '- Et plein d’autres !',
      ' N’hésitez pas à venir avec vos chaussures et vos questions.',
      'Les réparations sont toutes réalisées avec un objectif commun : le respect de l’esthétique d’origine et l’utilisation de matériaux de qualité.'
      
    ],
    
  },
  {
    id: 'reproduction-cles',
    title: 'Reproduction de clés',
    image: clef, // Corrected path
    description: "Service rapide et précis de reproduction de clés, j'utilise des équipements modernes pour garantir des duplicatas parfaits.  La grande majorité des clés sont effectuées à la minute.",
    features: [
      '- Clés plates',
      '- Clés à points',
      '- Clés brevetées (sur devis)',
      '- Badges'
    ]
  },
  {
    id: 'vente-produits',
    title: 'Nettoyage et entretien',
    image: nettoyage, // Corrected path
    description: 'Vos baskets ont connu des jours meilleurs ? Pas besoin de les abandonner ! Rayures, taches, usure : un bon coup de propre et un peu de savoir-faire suffisent à leur donner meilleure mine. Qu’elles soient fatiguées, abîmées ou juste en manque de style, confiez-les à des mains expertes. Nettoyage, réparation : vos chaussures méritent une seconde chance. Offrez-leur un nouveau départ à l’atelier !',
    features: [
      '- Entretien cuir lisse',
      '- Entretien suede et nubuck',
      '- Nettoyage sneakers ',
      '- Déjaunissement des semelles',
      '- Protection et imperméabilisation',
      '- Vente de produits d’entretien',
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

  // Scroll to section if hash is present in URL
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: target, offsetY: 70 }
      });
    }
  }
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