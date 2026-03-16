import { h } from 'vue'
import { NIcon } from 'naive-ui'

export function useRenderIcon() {
  function renderIcon(svgPath: string) {
    return () =>
      h(NIcon, null, {
        default: () =>
          h('svg', { viewBox: '0 0 24 24', fill: '#14b8a6' }, [h('path', { d: svgPath })]),
      })
  }

  return {
    renderIcon,
  }
}
