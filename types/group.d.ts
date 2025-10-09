import { BaseProps, CoreModuleEmits } from './component'

interface GroupProps extends BaseProps {
  /**
   * 分隔符
   * @default ''
   */
  separator?: string
}

declare interface RegionGroup {
  new (): {
    $props: GroupProps
    $emit: CoreModuleEmits
  }
}

/**
 * 多分组选择器组件核心模块
 */
export const RegionGroup: RegionGroup
export const RegionFullGroup: RegionGroup
