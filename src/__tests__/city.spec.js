import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { nextTick } from 'vue'

import DropdownRegionCityPicker from './components/DropdownRegionCityPicker.vue'

describe('CityPicker 城市选择器模式', function () {
  const wrapper = mount(DropdownRegionCityPicker, {
    props: {
      language: 'en',
      modelValue: undefined
    }
  })
  it('初始化后，触发器按钮应显示 `Please select` 文字', () => {
    // console.log(wrapper.html())
    expect(wrapper.find('.dd-default-trigger').text()).toBe('Please select')
  })
  it('使用数据进行初始化后，应有 2 个城市被选中（“北京市,福州市”）', async () => {
    await wrapper.setProps({ modelValue: ['110000', '350100'] })
    await nextTick()
    await vi.dynamicImportSettled()
    await flushPromises()
    expect(wrapper.find('.dd-default-trigger').text()).toBe('北京市,福州市')
  })
})
