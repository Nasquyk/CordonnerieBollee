<template>
  <nav :class="['fixed top-0 left-0 right-0 z-50 shadow-sm transition-colors duration-300 p-4', bgColorClass]">
    <div class="container mx-auto flex items-center justify-center lg:justify-between">
      <!-- Logo (visible uniquement sur PC) -->
      <div class="hidden lg:block">
        <NuxtLink to="/" class="text-xl font-bold" :class="textColorClass">
          Cordonnerie Bollée
        </NuxtLink>
      </div>
      
      <!-- Bouton du menu mobile -->
      <button @click="toggleMenu" class="lg:hidden absolute top-4 right-4 text-white focus:outline-none">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      
      <!-- Menu -->
      <div :class="['lg:flex lg:items-center lg:space-x-8', isMenuOpen ? 'block' : 'hidden', 'w-full lg:w-auto text-lg mt-4 lg:mt-0 flex flex-col lg:flex-row items-center']">
        <NuxtLink 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          class="block lg:inline-block py-2 px-4 rounded-lg transition-colors hover:bg-brown-200"
          :class="textColorClass"
          @click="closeMenu"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { handleScroll } from '@/utils/scroll'

const props = defineProps({
  bgColor: { type: String, default: 'bg-brown' },
  defaultTextColor: { type: String, default: 'text-white' }
})

const menuItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Prestations', path: '/prestation' },
  { name: 'Tarifs', path: '/tarifs' },
  { name: 'Réalisations', path: '/realisation' },
  { name: 'Contact', path: '/contact' }
]

const route = useRoute()
const isIndexPage = ref(route.path === '/')
const isMenuOpen = ref(false)
const bgColorClass = ref(isIndexPage.value ? 'bg-transparent' : props.bgColor)
const textColorClass = ref(isIndexPage.value ? 'text-white' : props.defaultTextColor)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const onScroll = () => {
  if (isIndexPage.value) {
    handleScroll(bgColorClass, textColorClass, props)
  }
}

onMounted(() => {
  if (isIndexPage.value) {
    window.addEventListener('scroll', onScroll)
    onScroll()
  }
})

onUnmounted(() => {
  if (isIndexPage.value) {
    window.removeEventListener('scroll', onScroll)
  }
})

watch(route, (newRoute) => {
  isIndexPage.value = newRoute.path === '/'
  bgColorClass.value = isIndexPage.value ? 'bg-transparent' : props.bgColor
  textColorClass.value = isIndexPage.value ? 'text-white' : props.defaultTextColor
  if (isIndexPage.value) {
    window.addEventListener('scroll', onScroll)
    onScroll()
  } else {
    window.removeEventListener('scroll', onScroll)
  }
  window.scrollTo(0, 0)
})
</script>

<style scoped>
@media (max-width: 1024px) {
  nav div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .lg\:flex {
    display: none;
  }
  .block {
    display: block;
  }
}
</style>
