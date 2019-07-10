<template>
  <div class="wp__content">
    <Hero></Hero>
    <p>Test</p>
  </div>
</template>

<script>
  import Hero from '~/components/sections/Hero'

  export default {
    components: {
      Hero
    }
  }
</script>

<style lang="scss" scoped>
  .wp__content {
      flex-direction: column;
  }

</style>
