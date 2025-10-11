<template>
  <RegionDropdown>
    <RegionColumns v-bind="$attrs" />
  </RegionDropdown>
</template>

<script setup>
import RegionDropdown from '../../modules/RegionDropdown'
import RegionColumns from '../../modules/column/RegionColumns'

defineOptions({
  inheritAttrs: false
})
</script>
