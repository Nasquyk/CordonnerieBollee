<template>
  <div class="bg-beige min-h-screen flex flex-col">
    <Navbar bgColor="bg-brown" defaultTextColor="text-white"/>
    <div :class="{'flex-grow': true, 'mt-20': $route.path !== '/'}">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>