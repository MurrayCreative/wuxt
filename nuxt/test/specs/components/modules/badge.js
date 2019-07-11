import { mount } from '@vue/test-utils'
import test from 'ava'
import Badge from '@/components/modules/Badge.vue'

test('is a Vue instance', t => {
  const wrapper = mount(Badge)
  t.is(wrapper.isVueInstance(), true)
})
