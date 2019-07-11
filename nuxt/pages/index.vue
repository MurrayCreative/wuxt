<template>
  <div class="wp__content">
    <Hero></Hero>
    <Feature></Feature>
    <BlogTeaser></BlogTeaser>
    <Testimonials></Testimonials>
  </div>
</template>

<script>
  import Hero from '~/components/sections/Hero'
  import Feature from '~/components/sections/Feature'
  import BlogTeaser from '~/components/sections/BlogTeaser'
  import Testimonials from '~/components/sections/Testimonials'

  export default {
    components: {
      Hero,
      Feature,
      BlogTeaser,
      Testimonials
    }
  }
</script>

<style lang="scss" scoped>
  .wp__content {
      .container {
        flex-direction: column;
      }
  }

</style>
