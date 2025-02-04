<template>
  <nav :class="['flex items-center justify-between transition-colors duration-300 flex-wrap p-6 fixed top-0 left-0 right-0 z-50 shadow-sm mb-4', bgColorClass]">
    <NuxtLink to="/" :class="textColorClass" class="text-xl font-bold">
      <!-- <img src="/logo.png" alt="Logo" class="h-8" /> -->
      Cordonnerie
    </NuxtLink>
    <div class="block lg:hidden">
      <button @click="toggleMenu" class="text-white focus:outline-none">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    <div :class="['w-full block flex-grow lg:flex lg:items-center lg:w-auto', { 'hidden': !isMenuOpen && 'lg:hidden' }]">
      <div class="text-sm lg:flex-grow flex justify-center space-x-3">
        <NuxtLink 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          :class="textColorClass"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-brown-600"
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
import { useRoute, useRouter } from 'vue-router'
import { handleScroll } from '@/utils/scroll'

const props = defineProps({
  bgColor: {
    type: String,
    default: 'bg-brown'
  },
  defaultTextColor: {
    type: String,
    default: 'text-white'
  }
})

const menuItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Prestation', path: '/prestation' },
  { name: 'Tarifs', path: '/tarifs' },
  { name: 'Réalisation', path: '/realisation' },
  { name: 'Contact', path: '/contact' }
]

const route = useRoute()
const router = useRouter()
const isIndexPage = ref(route.path === '/')

const bgColorClass = ref(isIndexPage.value ? 'bg-transparent' : props.bgColor)
const textColorClass = ref(isIndexPage.value ? 'text-white' : props.defaultTextColor)
const isMenuOpen = ref(false)

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
    onScroll() // Initial call to set the correct color on load
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
  window.scrollTo(0, 0) // Scroll to top on route change
})
</script>