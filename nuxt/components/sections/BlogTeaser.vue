<template>
  <section class="blog-teaser">
    <div class="container">
      <div class="md-layout">
        <div class="md-layout-item mx-auto">
          <h2 class="title">Latest Blogposts 3</h2>
          <blog-card
            card-plain
            type="horizontal"
            :shadow-normal="false"
            :no-colored-shadow="false"
            :card-image="cardBlogPost.cardBlogPost1"
          >
            <template slot="cardContent">
              <h6 class="card-category text-info">Enterprise</h6>
              <h3 class="card-title">
                <a href="javascript:void(0)"
                  >Autodesk looks to future of 3D printing with Project
                  Escher</a
                >
              </h3>
              <p class="card-description">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Today, it’s moving to a subscription
                model. Yet its own business model disruption is only part of the
                story — and…
                <a href="javascript:void(0)"> Read More </a>
              </p>
              <p class="author">
                by
                <a href="javascript:void(0)"> <b>Mike Butcher</b> </a>, 2 days
                ago
              </p>
            </template>
          </blog-card>
          <blog-card
            card-plain
            type="horizontal"
            :shadow-normal="false"
            :no-colored-shadow="false"
            :card-image="cardBlogPost.cardBlogPost2"
          >
            <template slot="cardContent">
              <h6 class="card-category text-danger">
                <md-icon class="text-danger">trending_up</md-icon>
                Trending
              </h6>
              <h3 class="card-title">
                <a href="javascript:void(0)"
                  >6 insights into the French Fashion landscape</a
                >
              </h3>
              <p class="card-description">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Today, it’s moving to a subscription
                model. Yet its own business model disruption is only part of the
                story — and…
                <a href="javascript:void(0)"> Read More </a>
              </p>
              <p class="author">
                by
                <a href="javascript:void(0)"> <b>Mike Butcher</b> </a>, 2 days
                ago
              </p>
            </template>
          </blog-card>
          <blog-card
            card-plain
            type="horizontal"
            :shadow-normal="false"
            :no-colored-shadow="false"
            :card-image="cardBlogPost3.cardBlogPost1"
          >
            <template slot="cardContent">
              <h6 class="card-category text-success">
                Startups
              </h6>
              <h3 class="card-title">
                <a href="javascript:void(0)"
                  >Lyft launching cross-platform service this week</a
                >
              </h3>
              <p class="card-description">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Today, it’s moving to a subscription
                model. Yet its own business model disruption is only part of the
                story — and…
                <a href="javascript:void(0)"> Read More </a>
              </p>
              <p class="author">
                by
                <a href="javascript:void(0)"> <b>Megan Rose</b> </a>, 2 days ago
              </p>
            </template>
          </blog-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { BlogCard } from '@/components/modules'
export default {
  name: 'Blogs',
  components: {
    BlogCard
  },
  data() {
    return {
      cardBlogPost: {
        cardBlogPost1: require('@/assets/img/placeholder.jpg'),
        cardBlogPost2: require('@/assets/img/placeholder.jpg')
      },
      cardBlogPost2: {
        cardBlogPost1: require('@/assets/img/placeholder.jpg'),
        cardBlogPost2: require('@/assets/img/placeholder.jpg')
      },
      cardBlogPost3: {
        cardBlogPost1: require('@/assets/img/placeholder.jpg')
      },
      cardBlogPost4: {
        cardBlogPost1: require('@/assets/img/placeholder.jpg'),
        cardBlogPost2: require('@/assets/img/placeholder.jpg')
      }
    }
  }
}
</script>

<style lang="scss"></style>
