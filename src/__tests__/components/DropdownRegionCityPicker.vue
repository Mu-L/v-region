<template>
  <RegionDropdown>
    <RegionCityPicker v-bind="$attrs" />
  </RegionDropdown>
</template>

<script setup>
import RegionDropdown from '../../modules/RegionDropdown'
import RegionCityPicker from '../../modules/city/RegionCityPicker'

defineOptions({
  inheritAttrs: false
})
</script>
