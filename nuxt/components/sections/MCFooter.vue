<template>
  <footer class="footer footer-white">
    <div class="container flex-direction-row">
      <a class="footer-brand" href="http://www.creative-tim.com">Murray Creative Nuxt</a>
      <ul>
        <li>
          <a href="javascript:void(0)">
            Creative
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            About Us
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            Blog
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            Licenses
          </a>
        </li>
      </ul>

      <ul class="social-buttons">
        <li>
          <md-button
            href="https://twitter.com/CreativeTim"
            target="_blank"
            class="md-twitter md-just-icon md-simple">
            <i class="fab fa-twitter"></i>
          </md-button>
        </li>
        <li>
          <md-button
            href="javascript:void(0)"
            target="_blank"
            class="md-dribbble md-just-icon md-simple">
            <i class="fab fa-dribbble"></i>
          </md-button>
        </li>
        <li>
          <md-button
            href="javascript:void(0)"
            target="_blank"
            class="md-google md-just-icon md-simple">
            <i class="fab fa-google-plus-g"></i>
          </md-button>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    year() {
      const year = new Date().getFullYear()
      return year
    }
  }
}
</script>
