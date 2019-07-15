<template>
  <section class="testimonials">
    <div class="container">
      <div class="md-layout">
        <div
          class="md-layout-item md-size-50 md-small-size-100 mx-auto text-center"
        >
          <h2 class="title">What Clients Say</h2>
        </div>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-33 md-small-size-100">
          <testimonial-card card-plain>
            <div slot="cardAvatarTop" class="md-card-avatar mt-0">
              <a href="javascript:void(0)">
                <img class="img" :src="sectionTestimonials1.testimonials1" />
              </a>
            </div>
            <template slot="cardContent">
              <h4 class="card-title">Mike Andrew</h4>
              <h6 class="card-category text-muted">
                CEO @ Marketing Digital Ltd.
              </h6>
              <h5 class="card-description">
                "I speak yell scream directly at the old guard on behalf of the
                future. I gotta say at that time I’d like to meet Kanye I speak
                yell scream directly at the old guard on behalf of the future."
              </h5>
            </template>
          </testimonial-card>
        </div>
        <div class="md-layout-item md-size-33 md-small-size-100">
          <testimonial-card card-plain>
            <div slot="cardAvatarTop" class="md-card-avatar mt-0">
              <a href="javascript:void(0)">
                <img class="img" :src="sectionTestimonials1.testimonials2" />
              </a>
            </div>
            <template slot="cardContent">
              <h4 class="card-title">Tina Thompson</h4>
              <h6 class="card-category text-muted">Marketing @ Apple Inc.</h6>
              <h5 class="card-description">
                "I promise I will never let the people down. I want a better
                life for all!!! Pablo Pablo Pablo Pablo! Thank you Anna for the
                invite thank you to the whole Vogue team It wasn’t any Kanyes I
                love Rick Owens’ bed design but the back is too high for the
                beams and angle of the ceiling"
              </h5>
            </template>
          </testimonial-card>
        </div>
        <div class="md-layout-item md-size-33 md-small-size-100">
          <testimonial-card card-plain>
            <div slot="cardAvatarTop" class="md-card-avatar mt-0">
              <a href="javascript:void(0)">
                <img class="img" :src="sectionTestimonials3.testimonials1" />
              </a>
            </div>
            <template slot="cardContent">
              <h4 class="card-title">Gina West</h4>
              <h6 class="card-category text-muted">CFO @ Apple Inc.</h6>
              <h5 class="card-description">
                "I've been trying to figure out the bed design for the master
                bedroom at our Hidden Hills compound... Royère doesn't make a
                Polar bear bed but the Polar bear. This is a very nice
                testimonial about this company."
              </h5>
            </template>
          </testimonial-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { TestimonialCard } from '@/components/modules'

export default {
  name: 'Testimonials',
  components: {
    TestimonialCard
  },
  data() {
    return {
      testimonials1: require('@/assets/img/placeholder.jpg'),
      sectionTestimonials1: {
        testimonials1: require('@/assets/img/placeholder.jpg'),
        testimonials2: require('@/assets/img/placeholder.jpg'),
        testimonials3: require('@/assets/img/placeholder.jpg')
      },
      sectionTestimonials2: {
        testimonials1: require('@/assets/img/placeholder.jpg'),
        testimonials2: require('@/assets/img/placeholder.jpg')
      },
      sectionTestimonials3: {
        testimonials1: require('@/assets/img/placeholder.jpg')
      }
    }
  },
  methods: {
    sectionTestimonials(image) {
      return {
        backgroundImage: `url(${image})`
      }
    }
  }
}
</script>

<style lang="scss">
.testimonials {
  background-color: $grey-100;
}
</style>
