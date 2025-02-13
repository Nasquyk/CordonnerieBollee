<template>
  <div class="min-h-screen">
    <div class="max-w-4xl mx-auto px-4 py-8">
      <header class="text-center mb-12">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Conditions Générales de Vente (CGV)</h1>
        <h2 class="text-xl text-gray-600">Cordonnerie Multiservices</h2>
      </header>

      <main class="bg-white shadow-lg rounded-lg p-6 space-y-8">
        <section v-for="(section, index) in sections" :key="index" class="border-b border-gray-200 last:border-0 pb-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">{{ section.title }}</h2>
          <div v-html="section.content" class="text-gray-600 leading-relaxed space-y-2"></div>
        </section>
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
  name: 'CGV',
  data() {
    return {
      sections: [
        {
          title: "1. Identification du vendeur",
          content: `
            <p>Nom de l'entreprise : Le Cordonnier Moderne</p>
            <p>Adresse : 59 Bis Avenue Bollée – 72 000 LE MANS</p>
            <p>Numéro SIRET : 947 554 226 000 29</p>
            <p>Numéro de téléphone : 06.08.63.83.32</p>
            <p>Adresse e-mail : lecordonniermoderne@gmail.com</p>
          `
        },
        {
          title: "2. Objet",
          content: `
            <p>Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Le Cordonnier Moderne (ci-après "le Vendeur") et toute personne physique ou morale (ci-après "le Client") passant commande pour des services de cordonnerie, reproduction de clés, réalisation de tampons et autres prestations proposées par le Vendeur.</p>
          `
        },
        {
          title: "3. Acceptation des CGV",
          content: `
            <p>En passant commande, le Client reconnaît avoir pris connaissance des présentes CGV et les accepter sans réserve. Les CGV prévalent sur tout autre document, sauf dérogation expresse convenue par écrit entre les parties.</p>
          `
        },
        {
          title: "4. Services proposés",
          content: `
            <ul class="list-disc pl-5">
              <li>Réparation de chaussures et petits travaux de maroquinerie</li>
              <li>Reproduction de clés (habitat, badge)</li>
              <li>Vente de produits d'entretiens du cuir (cirages, brosses, etc.)</li>
              <li>Services de gravure (plaques, médailles, tampons, etc.)</li>
              <li>Nettoyage et entretien sneakers</li>
            </ul>
          `
        },
        {
          title: "5. Commandes",
          content: `
            <p>Les commandes peuvent être passées directement en magasin. Toute commande est réputée ferme et définitive dès son acceptation par le Vendeur. Le Vendeur se réserve le droit de refuser toute commande pour des motifs légitimes.</p>
          `
        },
        {
          title: "6. Tarifs",
          content: `
            <p>Les prix des services et produits sont indiqués en euros (€) et sont nets de taxes (TVA non applicable, article 293 B du CGI). Les tarifs applicables sont ceux en vigueur au jour de la commande. Le Vendeur se réserve le droit de modifier ses prix à tout moment, mais les services seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.</p>
          `
        },
        {
          title: "7. Paiement",
          content: `
            <p>Le paiement est exigible immédiatement à la commande. Le Client peut régler par carte bancaire, espèces ou tout autre moyen accepté par le Vendeur. Aucun escompte ne sera accordé en cas de paiement anticipé.</p>
          `
        },
        {
          title: "8. Délais de réalisation",
          content: `
            <p>Les délais de réalisation des services sont indiqués lors de la commande. Le Vendeur s'engage à respecter les délais annoncés, sauf en cas de force majeure. En cas de retard, le Client en sera informé dans les plus brefs délais.</p>
          `
        },
        {
          title: "9. Retrait des commandes",
          content: `
            <div class="space-y-4">
              <div>
                <h3 class="font-medium">Présentation du Ticket</h3>
                <p>Afin de retirer un article ou un service commandé, il est impératif de présenter le ticket de dépôt qui vous a été remis au moment de la commande. Aucun article ne sera remis sans présentation de ce ticket.</p>
              </div>
              <div>
                <h3 class="font-medium">Responsabilité du Client</h3>
                <p>Le client est responsable de la conservation du ticket de dépôt. Le Cordonnier Moderne décline toutes responsabilités en cas de perte ou de vol de ce ticket. Sans présentation du ticket, nous ne pourrons procéder au retrait de la commande, et nous nous réservons le droit de ne pas restituer les articles.</p>
              </div>
              <div>
                <h3 class="font-medium">Retrait Non Réalisé</h3>
                <p>Si le retrait n'est pas effectué dans le délai spécifié, Le Cordonnier Moderne se réserve le droit de considérer la commande comme abandonnée, et les articles pourront être remis en vente ou détruits, sans remboursement possible dans un délai de 6 mois.</p>
              </div>
            </div>
          `
        },
        {
          title: "10. Garanties et responsabilités",
          content: `
            <p>Le Vendeur s'engage à fournir des services de qualité et à utiliser des matériaux conformes aux standards de la profession. En cas de défaut ou de non-conformité, le Client dispose d'un délai de 7 jours à compter de la livraison pour signaler tout défaut au Vendeur. Après ce délai, les services sont réputés acceptés sans réserve.</p>
          `
        },
        {
          title: "11. Précisions sur les garanties",
          content: `
            <div class="space-y-4">
              <div>
                <h3 class="font-medium">Travaux de collage</h3>
                <p>Le Vendeur ne fournit pas de garantie sur les travaux de collage, notamment pour les articles provenant de marques de fast fashion ou autres produits similaires. Le Vendeur n'étant pas le service après-vente (SAV) de ces marques, aucune réclamation concernant le collage ne sera acceptée.</p>
              </div>
              <div>
                <h3 class="font-medium">Reproduction de clés</h3>
                <p>Toute clé issue de la reproduction effectuée par le Vendeur est garantie uniquement si elle a été endommagée lors de l'utilisation normale et reproduite à partir d'une clé originale et fonctionnelle. Cependant, les clés endommagées après la reproduction ou provenant d'autres établissements ne sont pas couvertes par la garantie.</p>
              </div>
            </div>
          `
        },
        {
          title: "12. Droit de rétractation",
          content: `
            <p>Conformément à l'article L221-18 du Code de la consommation, le Client dispose d'un droit de rétractation de 14 jours pour les produits achetés en magasin, à condition que les articles soient retournés dans leur emballage d'origine, non ouverts et non utilisés. Aucun article déballé ne sera repris ni échangé. Ce droit ne s'applique pas aux services de cordonnerie et de reproduction de clés, réalisés sur mesure ou personnalisés.</p>
          `
        },
        {
          title: "13. Litiges",
          content: `
            <p>En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, le litige sera soumis aux tribunaux compétents du ressort du siège social du Vendeur.</p>
          `
        },
        {
          title: "14. Protection des données personnelles",
          content: `
            <p>Le Vendeur s'engage à respecter la confidentialité des données personnelles communiquées par le Client. Ces données sont nécessaires à la gestion des commandes et ne seront pas communiquées à des tiers sans l'accord du Client.</p>
          `
        },
        {
          title: "15. Modification des CGV",
          content: `
            <p>Le Vendeur se réserve le droit de modifier les présentes CGV à tout moment. Les nouvelles CGV seront applicables à toute commande passée après leur mise en ligne ou leur communication au Client.</p>
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