<template>
  <div class="min-h-screen ">
    <div class="max-w-4xl mx-auto px-4 py-8">
      <header class="text-center mb-12">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Mentions Légales</h1>
      </header>

      <main class="bg-white shadow-lg rounded-lg p-6 space-y-8">
        <section v-for="(section, index) in sections" :key="index" class="border-b border-gray-200 last:border-0 pb-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">{{ section.title }}</h2>
          <div v-html="section.content" class="text-gray-600 leading-relaxed space-y-2"></div>
        </section>

        <div class="text-sm text-gray-500 pt-6">
          Dernière mise à jour : 13/02/2025
        </div>
      </main>

      <footer class="mt-8 text-center text-gray-600">
        <p>ROSE Vincent</p>
        <p class="text-sm mt-2">Le Cordonnier Moderne - 59 Bis Avenue Bollée – 72 000 LE MANS</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MentionsLegales',
  data() {
    return {
      sections: [
        {
          title: "1. Éditeur du site",
          content: `
            <p>Le site https://cordonneriebollee.fr/ est édité par :</p>
            <p><strong>Le Cordonnier Moderne</strong></p>
            <p>Vincent ROSE</p>
            <p>Micro-entreprise immatriculée au RM de Le Mans sous le n° 947 554 226</p>
            <p>Siège social : 59 Bis Avenue Bollée - 72 000 LE MANS</p>
            <p>Téléphone : 06.08.63.83.32</p>
            <p>E-mail : lecordonniermoderne@gmail.com</p>
          `
        },
        {
          title: "2. Directeur de publication",
          content: `
            <p>Vincent ROSE</p>
          `
        },
        {
          title: "3. Hébergement du site",
          content: `
            <p>Le site est hébergé par :</p>
            <p>OVH</p>
            <p>2 rue Kellermann - 59100 Roubaix - France</p>
            <p>Site web : <a href="https://www.ovhcloud.com/fr/" class="text-blue-600 hover:text-blue-800">https://www.ovhcloud.com/fr/</a></p>
          `
        },
        {
          title: "4. Propriété intellectuelle",
          content: `
            <div class="space-y-4">
              <p>Tous les contenus (textes, images, logos, etc.) présents sur ce site sont la propriété exclusive de <strong>Le Cordonnier Moderne</strong>, sauf mention contraire. Toute reproduction ou utilisation sans autorisation est interdite.</p>
              <p>Le site a été construit en utilisant les technologies suivantes : NuxtJS et TailwindCSS.</p>
              <p >Le site a été réalisé par <a href="https://portfolio-nuxt-js.vercel.app/" class="text-blue-600 hover:text-blue-800" target="_blank"> Victorien Corbel </a>.</p>
            </div>
          `
        },
        {
          title: "5. Protection des données personnelles",
          content: `
            <p>Les informations recueillies via le site sont destinées à des fins de gestion des demandes et ne sont en aucun cas cédées à des tiers. Conformément à la loi Informatique et Libertés et au RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression en nous contactant à lecordonniermoderne@gmail.com.</p>
          `
        },
        {
          title: "6. Cookies",
          content: `
            <p>Le site utilise des cookies à des fins de mesure d'audience et d'amélioration de l'expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser ces cookies.</p>
          `
        },
        {
          title: "7. Responsabilité",
          content: `
            <p>Le Cordonnier Moderne s'efforce d'assurer l'exactitude des informations diffusées sur ce site mais ne saurait être tenu responsable des erreurs, omissions ou défaillances techniques.</p>
          `
        },
        {
          title: "8. Droit applicable",
          content: `
            <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux de Le Mans seront seuls compétents.</p>
          `
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Ajoutez ici des styles spécifiques si nécessaire */
</style>