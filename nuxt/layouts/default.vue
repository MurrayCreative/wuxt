<template>
  <main class="wrapper">
    <!-- header -->
    <MCHeader></MCHeader>
    <!-- end header -->

    <!-- main content container -->
    <nuxt />
    <!-- end main content container -->

    <!-- footer -->
    <MCFooter></MCFooter>
    <!-- end footer -->
  </main>
</template>

<script>
import MCHeader from '~/components/sections/MCHeader'
import MCFooter from '~/components/sections/MCFooter'

export default {
  components: {
    MCHeader,
    MCFooter
  }
}
</script>

<style lang="scss">
$primary: #37495c;
$secondary: #48b884;

html,
body {
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  color: #48b884;
  text-decoration: none;

  &:hover {
    color: darken($color: #48b884, $amount: 10);
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Nunito';
  font-weight: 700;
}

.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
}

.wp {
  &__title {
    margin-bottom: 30px;
  }

  &__content {
    p {
      line-height: 1.8rem;
    }
  }
}

.header {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 100px;
  margin-bottom: 50px;
  padding-bottom: 50px;

  border-bottom: 2px solid #ececec;

  &__nav {
    margin-top: 10px;

    a {
      margin: 5px;
    }
  }
}
</style>
