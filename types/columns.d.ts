import { BaseProps, CoreModuleEmits } from './component'

interface ColumnProps extends BaseProps {
  /**
   * 分隔符
   * @default ''
   */
  separator?: string
}

declare interface RegionColumns {
  new (): {
    $props: ColumnProps
    $emit: CoreModuleEmits
  }
}

/**
 * 多列竖排模式核心模块
 */
export const RegionColumns: RegionColumns
export const RegionFullColumns: RegionColumns
