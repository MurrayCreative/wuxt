import { mount, RouterLinkStub } from '@vue/test-utils'
import test from 'ava'
import Logo from '@/components/Logo.vue'

test('is a Vue instance', t => {
  const wrapper = mount(Logo, {
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })
  t.is(wrapper.isVueInstance(), true)
})
