<!-- pages/tarifs.vue -->
<template>
  <div class="flex flex-col">
  
      <div class="max-w-4xl mx-auto">
        <div class="text-center my-auto">
          <h1 class="text-4xl font-bold text-gray-900 mb-4 mt-8">Nos Tarifs</h1>
          <p class="text-lg text-gray-600">“Des solutions pour tous vos besoins en cordonnerie, maroquinerie et reproduction de clés
            <strong>Pas de services express</strong>
          </p>
        </div>
        <!-- Ajout de la classe pour changer la couleur du texte de la navbar -->
       
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div v-for="category in services" :key="category.name" class="bg-white rounded-lg shadow-lg p-6">
            <div class="flex items-center gap-2 mb-6">
              <Icon name="sparkles" class="h-5 w-5 text-blue-500" />
              <h2 class="text-xl font-semibold text-gray-900">{{ category.name }}</h2>
            </div>

            <ul class="space-y-4">
              <li v-for="item in category.items" :key="item.name" class="flex justify-between items-center">
                <span class="text-gray-700">{{ item.name }}</span>
                <span class="font-semibold text-gray-900">{{ item.price }}€</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  
</template>

<script setup>
const services = [
  {
    name: "Réparations classiques",
    items: [
      { name: "Ressemelage homme", price: "35-45" },
      { name: "Ressemelage femme", price: "30-40" },
      { name: "Talons homme", price: "15-20" },
      { name: "Talons femme", price: "12-18" },
      { name: "Patins", price: "8" }
    ]
  },
  {
    name: "Services express",
    items: [
      { name: "Ressemelage express", price: "+10" },
      { name: "Talons minute", price: "20" },
      { name: "Cirage express", price: "10" }
    ]
  },
  {
    name: "Entretien",
    items: [
      { name: "Cirage luxe", price: "15" },
      { name: "Imperméabilisation", price: "12" },
      { name: "Teinture", price: "25-35" },
      { name: "Désodorisation", price: "8" }
    ]
  },
  
];
</script>