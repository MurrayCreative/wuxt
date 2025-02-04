import { DropDown } from '~/components/modules'
import { Parallax } from '~/components/modules'
import { VPopover } from 'v-tooltip'
import ProductZoomer from 'vue-product-zoomer'
import { MobileMenu } from '~/components/modules'
import { Carousel, CarouselItem } from 'element-ui'
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component('drop-down', DropDown)
    Vue.component(Parallax.name, Parallax)
    Vue.component('v-popover', VPopover)
    Vue.component(MobileMenu.name, MobileMenu)
    Vue.use(ProductZoomer)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
  }
}

export default GlobalComponents
