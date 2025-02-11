<template>
  <div class="mx-auto p-4 md:p-6 text-center">
    <h1 class="text-3xl font-bold text-center mb-6">Tarifs</h1>
      
      <p class="text-center text-gray-600 text-lg mb-8">
        À l’atelier, chaque devis est réalisé avant la mise en œuvre des réparations. <br>
        L’atelier est labellisé 
        <span class="text-blue-500 cursor-pointer underline" @click="showModal = true">Bonus Réparation</span> 
        et ce bonus est inclus dans la grille tarifaire.
      </p>

    <div class="flex flex-col md:flex-row justify-center gap-4 w-full">
      <!-- Carte Cordonnerie -->
      <div class="md:w-1/2 flex justify-center">
        <div class="bg-white p-4 rounded-lg shadow-md text-sm w-full md:w-[90%] lg:w-[80%] card-height flex flex-col">
          <h2 class="text-lg font-semibold mb-3">Cordonnerie</h2>
          <ul class="space-y-2 flex-grow">
            <li v-for="service in tarifs.Cordonnerie" :key="service.name" class="flex justify-between py-2">
              <span class="font-bold">{{ service.name }}</span>
              <div class="text-right">
                <span class="font-semibold">{{ service.price.split(' (')[0] }}</span>
                <span v-if="service.price.includes('(la paire)')" class="block text-xs text-gray-500">la paire</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Autres cartes -->
      <div class="md:w-1/2 flex flex-col gap-4">
        <div 
          v-for="(services, category) in otherServices" 
          :key="category" 
          class="bg-white p-4 rounded-lg shadow-md text-sm w-full card-height flex flex-col"
        >
          <h2 class="text-lg font-semibold mb-3">{{ category }}</h2>
          <ul class="space-y-2 flex-grow">
            <li v-for="service in services" :key="service.name" class="flex justify-between py-2">
              <span class="font-bold">{{ service.name }}</span>
              <div class="text-right">
                <span class="font-semibold">{{ service.price.split(' (')[0] }}</span>
                <span v-if="service.price.includes('(la paire)')" class="block text-xs text-gray-500">la paire</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md">
      <h2 class="text-xl font-semibold mb-4">Bonus Réparation</h2>
      <p class="text-gray-700">Le Bonus Réparation est une aide financière permettant de réduire le coût de certaines réparations afin de favoriser la durabilité des objets.</p>
      <img src="/assets/img/Bonus-Reparation.png" alt="Bonus Réparation" class="w-full mt-4">
      <button @click="showModal = false" class="mt-4 py-2shadow bg-brown hover:bg-[#54361f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Fermer</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const showModal = ref(false);
const tarifs = ref({
  "Cordonnerie": [
    { name: "Talon", price: "18€ (la paire)" },
    { name: "Patin", price: "22€ (la paire)" },
    { name: "Talon cranté", price: "20€ (la paire)" },
    { name: "Patin cranté", price: "24€ (la paire)" },
    { name: "Patin épais cuir", price: "47€ (la paire)" },
    { name: "Patin épais caoutchouc", price: "29€ (la paire)" },
    { name: "Talon aiguille", price: "17€ (la paire)" },
    { name: "Redresse", price: "A partir de 10€ (la paire)" },
    { name: "Collage", price: "A partir de 12€" },
    { name: "Ressemelage caoutchouc", price: "A partir de 70€ (la paire)" },
    { name: "Changement trépoint", price: "20€ (la paire)" },
    { name: "Mise en forme", price: "9€ (la paire)" },
    { name: "Fers haricots", price: "4€ (la paire)" },
    { name: "Fers encastrés", price: "20€ (la paire)" },
    { name: "Complet sneakers", price: "49€ (la paire)" },
    { name: "Glissoirs / Antiglissoires", price: "28€ (la paire)" },
    { name: "Semelle de propreté", price: "18€ (la paire)" }
  ],
  "Entretien": [
    { name: "Entretien du cuir (nettoyage, crémage, imperméabilisation)", price: "à partir de 20€" },
 
    { name: "Nettoyage sneakers", price: "à partir de 29€" },
    { name: "Fers encastrés", price: "20€ (la paire)" },
    { name: "Complet sneakers", price: "49€ (la paire)" },
    { name: "Glissoirs / Antiglissoires", price: "28€ (la paire)" },
  
  ],
  " Maroquinerie": [
    { name: "Couture simple", price: "à partir de 12€" },
    { name: "Pièce invisible ", price: "15€" }
  ],
  "Clés et badges minute": [
    { name: "Clé plate", price: "7.5€" },
    { name: "Clé plate couleur ", price: "8.5€" },
    { name: "Clé à points", price: "29€" },
    { name: "Clé brevetée", price: " sur devis" },
    { name: "Badge", price: "à partir de 29€" }
  ],
});

const otherServices = ref({});

onMounted(() => {
  const { Cordonnerie, ...others } = tarifs.value;
  otherServices.value = others;
});
</script>

<style scoped>
body {
  background-color: #f5e7da;
}
.card-height {
  height: auto;
}
@media (min-width: 768px) {
  .card-height {
    height: auto;
  }
}
</style>
