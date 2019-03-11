import { mount } from '@vue/test-utils'
import TopBar from '@/components/TopBar.vue'

describe('TopBar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TopBar)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
