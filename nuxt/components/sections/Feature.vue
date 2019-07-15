<template>
  <section class="features">
    <div class="container">
      <div class="md-layout">
        <div
          class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
        >
          <h2 class="title">Why our product is the best</h2>
          <h5 class="description">
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he
            wouldn't scroll to get here. Add a button if you want the user to
            see more.
          </h5>
        </div>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-33 md-small-size-100">
          <info-areas icon-color="info" icon="chat" text-center>
            <h4 slot="title" class="info-title">Free Chat</h4>
            <p slot="content">
              Divide details about your product or agency work into parts. Write
              a few lines about each one. A paragraph describing a feature will
              be enough.
            </p>
          </info-areas>
        </div>
        <div class="md-layout-item md-size-33 md-small-size-100">
          <info-areas icon-color="success" icon="verified_user" text-center>
            <h4 slot="title" class="info-title">Verified Users</h4>
            <p slot="content">
              Divide details about your product or agency work into parts. Write
              a few lines about each one. A paragraph describing a feature will
              be enough.
            </p>
          </info-areas>
        </div>
        <div class="md-layout-item md-size-33 md-small-size-100">
          <info-areas icon-color="danger" icon="fingerprint" text-center>
            <h4 slot="title" class="info-title">Fingerprint</h4>
            <p slot="content">
              Divide details about your product or agency work into parts. Write
              a few lines about each one. A paragraph describing a feature will
              be enough.
            </p>
          </info-areas>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { InfoAreas } from '@/components/modules'

export default {
  name: 'Features',
  components: {
    InfoAreas
  },
  data() {
    return {
      iphone: require('@/assets/img/placeholder.jpg'),
      iphone2: require('@/assets/img/placeholder.jpg'),
      image: require('@/assets/img/placeholder.jpg')
    }
  },
  computed: {
    features5() {
      return {
        backgroundImage: `url(${this.image})`
      }
    }
  }
}
</script>

<style lang="scss"></style>
