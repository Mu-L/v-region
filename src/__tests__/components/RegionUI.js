import { h } from 'vue'

import { mergeBaseProps, mergeEmits } from '../../core/options'
import { useRegionUI } from '../../core/region-ui'

export default {
  name: 'RegionCore',
  props: mergeBaseProps(),
  emits: mergeEmits(),
  setup (props, { emit, expose }) {
    const {
      data,
      lang,
      reset,
      setLevel,
      isComplete,
      regionText,
      hasCity, hasArea, hasTown,
      setupTownListLoader
    } = useRegionUI(props, emit)

    expose({
      hasCity,
      hasArea,
      hasTown,

      data,
      lang,
      reset,
      setLevel,
      isComplete,
      regionText,
      setupTownListLoader
    })

    return () => h('div')
  }
}
