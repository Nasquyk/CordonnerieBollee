<template>
  <ImgComparisonSlider>
    <!-- eslint-disable -->
    <img
      slot="first"
      src="/img/chaussureblanche_sale.jpg"
    />
    <img
      slot="second"
      
      src="/img/chaussureblanche.png"
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
};
</script>

<style scoped>
img {
  width: 100%;
  height: 500px;
}
</style>