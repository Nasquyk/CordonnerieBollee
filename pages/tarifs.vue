<template>
  <div class="flex items-center justify-center min-h-screen p-4">
    <div class="bg-white shadow-lg rounded-lg p-8 w-[210mm] min-h-[297mm] border border-gray-300 overflow-y-auto">
      <h1 class="text-3xl font-bold text-center mb-6">Tarifs</h1>
      
      <p class="text-center text-gray-600 text-lg mb-8">
        À l’atelier, chaque devis est réalisé avant la mise en œuvre des réparations. <br>
        L’atelier est labellisé 
        <span class="text-blue-500 cursor-pointer underline" @click="showModal = true">Bonus Réparation</span> 
        et ce bonus est inclus dans la grille tarifaire.
      </p>
      
      <div class="space-y-6">
        <div v-for="category in services" :key="category.name">
          <h2 class="text-xl font-semibold text-gray-700 border-b pb-2">{{ category.name }}</h2>
          <table class="w-full border-collapse mt-2">
            <tbody>
              <tr v-for="item in category.items" :key="item.name" class="border">
                <td class="p-2">{{ item.name }}</td>
                <td class="p-2 text-right">{{ item.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p class="text-center text-gray-600 mt-6">Tous nos travaux sont garantis. Pour toute demande spécifique, contactez-nous.</p>
    </div>
  </div>

  <!-- Modal -->
  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md">
      <h2 class="text-xl font-semibold mb-4">Bonus Réparation</h2>
      <p class="text-gray-700">Le Bonus Réparation est une aide financière permettant de réduire le coût de certaines réparations afin de favoriser la durabilité des objets.</p>
      <img src="/assets/img/Bonus-Reparation.png" alt="Bonus Réparation" class="w-full mt-4">
      <button @click="showModal = false" class="mt-4 shadow bg-brown hover:bg-[#54361f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Fermer</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);

const services = [
  {
    name: "Cordonnerie",
    items: [
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
      { name: "Changement trépointe", price: "20€ (la paire)" },
      { name: "Mise en forme", price: "9€ (la paire)" },
      { name: "Fers haricots", price: "4€ (la paire)" },
      { name: "Fers encastrés", price: "20€ (la paire)" },
      { name: "Complet sneakers", price: "49€ (la paire)" },
      { name: "Glissoirs / Antiglissoires", price: "28€ (la paire)" },
      { name: "Semelle de propreté", price: "18€ (la paire)" }
    ]
  }
];
</script>
