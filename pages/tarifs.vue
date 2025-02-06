
<template>
  <div class="flex flex-col">
  
      <div class="max-w-6xl mx-auto"> <!-- Modifié de 4xl à 6xl -->
        <div class="text-center my-auto">
          <h1 class="text-4xl font-bold text-gray-900 mb-4 mt-8">Nos Tarifs</h1>
          <p class="text-lg text-gray-600 mb-8">“Des solutions pour tous vos besoins en cordonnerie, maroquinerie et reproduction de clés
            <strong>Pas de services express</strong>
          </p>
        </div>
        
        <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-12"> <!-- Modifié de 2 à 1 colonne pour augmenter la largeur -->
          <div v-for="category in services" :key="category.name" class="bg-white rounded-lg shadow-lg p-8 w-full"> <!-- Ajouté w-full pour pleine largeur -->
            <div class="flex flex-col items-center gap-2 mb-6"> <!-- Ajouté flex-col et centré -->
              <Icon name="sparkles" class="h-5 w-5 text-blue-500" />
              <h2 class="text-xl font-semibold text-gray-900 text-center">{{ category.name }}</h2> <!-- Ajouté text-center -->
            </div>

            <ul class="space-y-4">
              <li v-for="item in category.items" :key="item.name" class="flex justify-between items-center">
                <span class="text-gray-700">{{ item.name }}</span>
                <span class="font-semibold text-gray-900">{{ item.price }}</span>
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
    name: "Cordonnerie",
    items: [
      { name: "Talon", price: "18€" },
      { name: "Patin", price: "22€" },
      { name: "Redresse", price: "à partir de 10€" },
      { name: "Mise en forme", price: "9€" },
      { name: "Fers encastrés", price: "20€" }
    ]
  },
  {
    name: "Entretien",
    items: [
      { name: "Entretien du cuir", price: "à partir de 20€" },
      { name: "Nettoyage sneakers", price: "29€" },
      
    ]
  },
  {
    name: "Maroquinerie",
    items: [
      { name: "Couture simple", price: "à partir de 12" },
      { name: "Pièce invisible", price: "15€" },
      { name: "Nettoyage et entretien", price: "sur devis" },
    ]
  },
  {
    name: "Reproduction de clés/badges",
    items: [
      { name: "Clé plate", price: "à partir de 7.5€" },
      { name: "Clé plate couleur", price: "8.5€" },
      { name: "Clé a points", price: "29€" },
      { name: "Clé Brevetée", price: "sur devis" },
      { name: "Badge", price: "à partir de 29€" },
    ]
  }
  
];
</script>