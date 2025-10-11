<template>
  <RegionDropdown>
    <RegionGroup v-bind="$attrs" />
  </RegionDropdown>
</template>

<script setup>
import RegionDropdown from '../../modules/RegionDropdown'
import RegionGroup from '../../modules/group/RegionGroup'

defineOptions({
  inheritAttrs: false
})
</script>
