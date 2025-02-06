<template>
  <ImgComparisonSlider>
    <!-- eslint-disable -->
    <img
      slot="first"
      :src="imageBefore"
    />
    <img
      slot="second"
      :src="imageAfter"
    />
    <!-- eslint-enable -->
  </ImgComparisonSlider>
</template>

<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

export default {
  name: 'ExampleComponent',
  components: {
    ImgComparisonSlider,
  },
  props: {
    imageBefore: {
      type: String,
      required: true,
    },
    imageAfter: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 50vh; /* Utilisation d'unités relatives pour la hauteur */
}
</style>