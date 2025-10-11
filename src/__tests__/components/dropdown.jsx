import {
  RegionDropdown,
  RegionGroup,
  RegionColumns,
  RegionCityPicker
} from '../../'

export function RegionGroupDropdown (props) {
  return (
    <RegionDropdown>
      <RegionGroup {...props} />
    </RegionDropdown>
  )
}

export function RegionColumnsDropdown (props) {
  return (
    <RegionDropdown>
      <RegionColumns {...props} />
    </RegionDropdown>
  )
}

export function RegionCityPickerDropdown (props) {
  console.log(arguments)
  return (
    <RegionDropdown>{{
      default: () => <RegionCityPicker {...props} />
    }}</RegionDropdown>
  )
}
