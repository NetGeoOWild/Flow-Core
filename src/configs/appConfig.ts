import { NConfigProvider, type GlobalThemeOverrides } from 'naive-ui'

const primaryColor = '#14b8a6'
const primaryHover = '#2dd4bf'
const primaryPressed = '#0d9488'

export const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    // Базовые цвета бренда
    primaryColor: primaryColor,
    primaryColorHover: primaryHover,
    primaryColorPressed: primaryPressed,
    primaryColorSuppl: primaryHover,

    // Фоны (морская пена и светлая вода)
    bodyColor: '#f0f9fa',
    cardColor: '#ffffff',
    modalColor: '#ffffff',
    popoverColor: '#ffffff',

    // Типографика и границы
    textColor1: '#000000',
    textColor2: '#000000',
    borderColor: '#ccebeb',

    // Скроллбары и прочее
    railColor: '#ccebeb',
  },

  Layout: {
    siderColor: 'rgba(255, 255, 255, 0.75)',
    headerColor: '#357e87',
    footerColor: '#ffffff',
  },

  Menu: {
    // Текст и иконки
    itemTextColor: '#115e59',
    itemTextColorHover: primaryHover,
    itemTextColorActive: primaryColor,
    itemTextColorChildActive: primaryColor,

    // Фон активного пункта
    itemColorActive: 'rgba(20, 184, 166, 0.12)',
    itemColorActiveHover: 'rgba(20, 184, 166, 0.18)',

    // Иконки
    itemIconColor: '#115e59',
    itemIconColorHover: primaryHover,
    itemIconColorActive: primaryColor,
  },

  Button: {
    // Убираем резкие тени и делаем кнопки мягче
    borderRadiusMedium: '10px',
    rippleDuration: '0.4s',
    // Кастомные цвета для кнопок (опционально)
    colorOpacityPrimary: '0.1',
    fontWeight: '600',
  },

  Input: {
    borderRadius: '10px',
    color: '#ffffff',
    colorFocus: '#ffffff',
    border: '1px solid #ccebeb',
    borderFocus: `1px solid ${primaryColor}`,
    boxShadowFocus: `0 0 0 2px rgba(20, 184, 166, 0.2)`,
  },

  Card: {
    borderRadius: '16px',
    borderColor: '#ccebeb',
    boxShadow: '0 4px 12px -2px rgba(20, 184, 166, 0.05)',
  },

  Checkbox: {
    color: '#ffffff',
    checkMarkColor: '#ffffff',
    colorChecked: primaryColor,
    border: `1px solid #ccebeb`,
    borderRadius: '4px',
  },
}

const softGreen = '#10b981' // Мягкий зеленый (Emerald 500)
const softGreenHover = '#34d399' // Чуть светлее при наведении

export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    // Акцентные цвета
    primaryColor: softGreen,
    primaryColorHover: softGreenHover,
    primaryColorPressed: '#059669',
    primaryColorSuppl: softGreenHover,

    // Глобальные фоны
    bodyColor: '#000000', // Чистый черный фон страницы
    cardColor: '#111111', // Очень темно-серый для карточек
    modalColor: '#1a1a1a',
    popoverColor: '#1a1a1a',

    // Текст
    textColor1: '#ffffff', // Основной текст — белый
    textColor2: '#ffffff', // Вторичный — серый
    textColor3: '#737373', // Плейсхолдеры

    // Границы
    borderColor: '#262626',
    dividerColor: '#262626',
  },

  Layout: {
    // Хедер и Сайдер (серые, чтобы выделяться на черном фоне)
    headerColor: '#1a1a1a',
    headerBorderColor: '#262626',
    siderColor: '#121212',
    siderBorderColor: '#262626',
  },

  Menu: {
    // Настройки текста в меню
    itemTextColor: '#a3a3a3',
    itemTextColorHover: '#ffffff',
    itemTextColorActive: '#ffffff',

    // Иконки
    itemIconColor: '#a3a3a3',
    itemIconColorHover: '#ffffff',
    itemIconColorActive: softGreen,

    // Подсветка активного пункта
    itemColorActive: 'rgba(16, 185, 129, 0.15)',
    itemColorActiveHover: 'rgba(16, 185, 129, 0.2)',
  },

  Button: {
    borderRadiusMedium: '8px',
    // Чтобы текст на зеленых кнопках был читаемым (белым или очень темным)
    textColorPrimary: '#ffffff',
    textColorFocus: '#ffffff',
  },

  Input: {
    color: '#0a0a0a',
    colorFocus: '#121212',
    border: '1px solid #262626',
    borderFocus: `1px solid ${softGreen}`,
    boxShadowFocus: '0 0 0 2px rgba(16, 185, 129, 0.2)',
    textColor: '#ffffff',
  },

  Card: {
    borderColor: '#262626',
    borderRadius: '12px',
  },

  Checkbox: {
    colorChecked: softGreen,
    checkMarkColor: '#ffffff',
    border: '1px solid #404040',
  },
}
