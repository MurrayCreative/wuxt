<template>
  <Page v-if="single.type === 'page'" :page="single" />
  <Post v-else :post="single" />
</template>

<script>
import Page from '~/components/templates/Page'
import Post from '~/components/templates/Post'
import { mapState } from 'vuex'

export default {
  async fetch({ store, error, app, route }) {
    try {
      await store.dispatch('page/fetchPage', { app: app, route: route })
    } catch (e) {
      // @todo add formal error handlers
      console.log(e.message)
    }
  },
  computed: mapState({
    single: state => {
      console.log(state.single)
      return state.page.single
    }
  }),
  components: {
    Page,
    Post
  }
}
</script>
