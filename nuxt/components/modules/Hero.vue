<template>
  <div class="hero pt-0 pb-0">
    <div class="page-header header-filter" :style="header('1')">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-100 ml-auto text-right"
          >
            <h1 class="title">Forest Brings You A Safer Way To Invest</h1>
            <h4>
              Many people don’t invest even when they have the cash, citing
              confusion and the time it takes to weigh all the risks and
              benefits.
            </h4>
            <br />
            <md-button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              class="md-success md-lg"
              target="_blank"
            >
              <i class="fas fa-ticket-alt"></i>
              <span>Invest Now</span>
            </md-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Headers',
  data() {
    return {
      companyName: null,
      companyEmail: null,
      companyPassword: null,
      toggledClass: false,
      headerImages: {
        Image1: require('@/assets/img/placeholder.jpg'),
        Image2: require('@/assets/img/placeholder.jpg'),
        Image3: require('@/assets/img/placeholder.jpg'),
        Image4: require('@/assets/img/placeholder.jpg'),
        Image5: require('@/assets/img/placeholder.jpg')
      }
    }
  },
  methods: {
    header(nr) {
      return {
        backgroundImage: `url(${this.headerImages[`Image${nr}`]})`
      }
    },
    bodyClick() {
      const bodyClick = document.getElementById('bodyClick')

      if (bodyClick === null) {
        const body = document.querySelector('body')
        const elem = document.createElement('div')
        elem.setAttribute('id', 'bodyClick')
        body.appendChild(elem)

        const bodyClick = document.getElementById('bodyClick')
        bodyClick.addEventListener('click', this.toggleNavbarMobile)
      } else {
        bodyClick.remove()
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar
      this.toggledClass = !this.toggledClass
      this.bodyClick()
    }
  }
}
</script>

<style lang="scss">
.buttons {
  display: flex;
  align-items: center;
}

.hero {
  .el-carousel__container {
    height: 100vh !important;
  }

  .el-carousel {
    border-radius: 0 !important;
  }
}

.text-right {
  text-align: right;
}

.border-radius-0 {
  border-radius: 0;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pt-0 {
  padding-top: 0 !important;
}

@media all and (max-width: 960px) {
  .md-card-form-horizontal .md-layout-item {
    margin-top: 1.5rem;
  }
}
</style>
