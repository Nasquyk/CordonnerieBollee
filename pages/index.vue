<template>
  <div class="flex flex-col min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-screen bg-black">
      <div class="absolute inset-0 z-10">
        <img 
          src="@/assets/img/LeatherBlackShoes.jpg" 
          alt="portrait" 
          class="w-full h-full object-cover opacity-50"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div class="relative container mx-auto px-4 h-full flex items-center z-20">
        <div class="text-beige text-center md:text-left">
          <h1 class="text-3xl md:text-5xl font-bold mb-6">
            Bienvenue à la Cordonnerie Bollée !
          </h1>
          
          <button @click="scrollToSection" class="bg-lightGreen text-white px-6 py-3 rounded-md hover:bg-darkGreen duration-300">
            Me découvrir
          </button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="services" class="py-16 bg-beige-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            
            <p class="text-gray-700 text-lg md:text-2xl">
              <h2 class="text-3xl font-bold mb-4">Bienvenue à la Cordonnerie Bollée, la cordonnerie du coin qui a vu le jour en 1926 !</h2>
              C'est toujours un plaisir de vous recevoir dans cet atelier pour réparer et entretenir vos chaussures, escarpins, sneakers...<br>
              Les coutures de sacs et autres accessoires en cuir sont aussi les bienvenus !<br>

              Un service de reproduction de clé et de badge est aussi proposé.<br>

              Au plaisir de vous voir bientôt !
            </p>
          </div>
          <div class="bg-gray-200 h-[250px] md:h-[350px] w-full md:w-[350px] mx-auto md:ml-48">
            <!-- Add your photo here -->
            <img 
          src="@/assets/img/portrait.jpg" 
          alt="portrait" 
          class="w-full h-full object-cover border-4 border-darkGreen rounded-lg"
        />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Services</h2>

        

        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NuxtLink to="/prestation#reparation-chaussures">
            <div class="relative overflow-hidden rounded-lg h-[400px] md:h-[500px]"> <!-- Ajustement de la hauteur -->
              <img 
                src="/assets/img/tableAvecMachine.jpg" 
                alt="Restauration de Chaussure" 
                class="w-full h-full object-cover"
              /> 
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 class="text-white text-lg md:text-xl font-semibold">Réparation de chaussures</h3>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/prestation#vente-produits">
            <div class="relative overflow-hidden rounded-lg h-[400px] md:h-[500px]"> <!-- Ajustement de la hauteur -->
              <img 
                src="/assets/img/produit.jpg" 
                alt="Vente de Produit d'entretien" 
                class="w-full h-full object-cover"
              /> 
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 class="text-white text-lg md:text-xl font-semibold">Vente de produits d'entretien</h3>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/prestation#reproduction-cles">
            <div class="relative overflow-hidden rounded-lg h-[400px] md:h-[500px]"> <!-- Ajustement de la hauteur -->
              <img 
                src="/assets/img/clefService.jpg" 
                alt="Reproduction de Clés" 
                class="w-full h-full object-cover"
              /> 
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 class="text-white text-lg md:text-xl font-semibold">Reproduction de clés</h3>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Store Info Section -->
    <section class="py-16 bg-beige-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">La boutique</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Informations pratiques</h3>
            <div class="space-y-3">
              <p><strong>Téléphone :</strong> 06 08 63 83 32</p>
              <p>
                <strong>Horaires d'ouverture :</strong><br />
                Du Mardi au Vendredi : 9h00 - 13h00 | 14h00 - 18h30<br>
                Le Samedi : 9h00 - 12h30

              </p>
              <p>
                <strong>Adresse :</strong><br />
                59 bis avenue Bollée, 72 000 Le Mans
              </p>
            </div>
          </div>
          <div>
            <!-- Add Google Maps integration here -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.8004864802564!2d0.2064651712098677!3d48.00236674379857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e288d56915b039%3A0x269d812a1fe2dc5c!2s59%20Bis%20Av.%20Boll%C3%A9e%2C%2072100%20Le%20Mans!5e0!3m2!1sfr!2sfr!4v1736866594955!5m2!1sfr!2sfr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>

    

   
  </div>
</template>


<script setup>
import { onMounted } from "vue"; // Ajoute bien cet import
import { useNuxtApp } from "#app";
import { handleScroll } from "@/utils/scroll";
import ImageComparison from "@/components/ImageComparison.vue";


import Footer from "@/components/Footer.vue";
import { NuxtImg } from "#components";

let gsap;

onMounted(async () => {
  const { $gsap } = useNuxtApp();
  gsap = $gsap;

  if (gsap) {
    gsap.registerPlugin(gsap.ScrollToPlugin);
  }
});

const scrollToSection = () => {
  const target = document.getElementById("services");
  if (gsap) {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: target, offsetY: 70 },
      onComplete: () => handleScroll("bgColorClass", "textColorClass", { bgColor: "bg-red-600" }),
    });
  }
};
</script>

