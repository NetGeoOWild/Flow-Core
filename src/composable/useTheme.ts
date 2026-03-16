import { type CSSProperties, computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export function useTheme() {
  const themeState = useLocalStorage('theme', {
    theme: false,
    themeName: 'light',
  })

  const isDark = computed({
    get: () => themeState.value.theme,
    set: (val) => {
      themeState.value.theme = val
      themeState.value.themeName = val ? 'dark' : 'light'
    },
  })

  function railStyle({ focused, checked }: { focused: boolean; checked: boolean }) {
    const style: CSSProperties = {}
    if (!checked) {
      style.background = '#8cdbdb'
      if (focused) style.boxShadow = '0 0 0 2px #98f2f2'
    } else {
      style.background = '#a272e0'
      if (focused) style.boxShadow = '0 0 0 2px #725a91'
    }
    return style
  }

  return {
    isDark,
    railStyle,
  }
}
