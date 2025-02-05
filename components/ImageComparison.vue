<template>
  <div class="flex flex-col items-center">
    <div
      class="relative w-[400px] h-64 overflow-hidden"
      @mousemove="onDrag"
      @mouseup="stopDragging"
      @mouseleave="stopDragging"
      @touchmove="onDrag"
      @touchend="stopDragging"
      @touchcancel="stopDragging"
    >
      <!-- Image de fond optimisée -->
      <NuxtImg
        :src="imageBefore"
        alt="Image Before"
        class="absolute inset-0 w-full h-full object-cover"
        format="webp"
        quality="80"
      />

      <!-- Image à révéler optimisée -->
      <div
        class="absolute inset-0 overflow-hidden"
        :style="{ width: sliderPosition + '%' }"
      >
        <NuxtImg
          :src="imageAfter"
          alt="Image After"
          class="absolute inset-0 w-full h-full object-cover"
          format="webp"
          quality="80"
        />
      </div>

      <!-- Barre draggable -->
      <div
        class="absolute inset-y-0"
        :style="{ left: sliderPosition + '%' }"
        @mousedown="startDragging"
        @touchstart="startDragging"
      >
        <div class="w-1 h-full bg-blue-500 cursor-ew-resize"></div>
      </div>
    </div>

    <!-- Barre de contrôle -->
    <div class="w-64 mt-4">
      <input
        type="range"
        min="0"
        max="100"
        v-model="sliderPosition"
        class="w-full"
      />
    </div>
  </div>
</template>

<script>
export default {
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
  data() {
    return {
      sliderPosition: 50,
      isDragging: false,
    };
  },
  methods: {
    startDragging() {
      this.isDragging = true;
    },
    stopDragging() {
      this.isDragging = false;
    },
    onDrag(event) {
      if (this.isDragging) {
        const rect = this.$el.getBoundingClientRect();
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const offsetX = clientX - rect.left;
        this.sliderPosition = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
      }
    },
  },
  mounted() {
  console.log("imageBefore:", this.imageBefore);
  console.log("imageAfter:", this.imageAfter);
}

};
</script>
