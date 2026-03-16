# Flow-Core 🚀

<div align="center">
  <img src="https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vue.js&logoColor=white" alt="Vue 3">
  <img src="https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Gemini-API-8E75B2?logo=google&logoColor=white" alt="Gemini API">
  <img src="https://img.shields.io/badge/ApexCharts.js-📊-FF6384" alt="ApexCharts">
</div>

## 📝 О проекте

**Flow-Core** — это современное веб-приложение для управления задачами, созданное с использованием Vue 3 и Vite. Проект объединяет в себе классический функционал todo-приложений с возможностями искусственного интеллекта и наглядной аналитикой.
**(Используется API_KEY Gemini - бесплатной модели, для корректной работы используйте свой API_KEY Gemini)**

### ✨ Ключевые особенности

- ✅ **Интеллектуальное управление задачами** — создавайте, редактируйте и организуйте свои заметки
- 🤖 **Интеграция с Gemini API** — умные подсказки и автоматизация при работе с задачами
- 📊 **Визуальная аналитика** — графики и статистика вашей продуктивности с помощью Vue Apex Charts
- 🎯 **Drag & Drop** — интуитивное перемещение задач между статусами

## 🎯 Функционал

### Управление задачами
- ➕ Создание новых заметок
- ✏️ Редактирование существующих задач
- 🗑️ Удаление заметок
- ✅ Перемещение между статусами (выполнено/не выполнено)
- 👁️ Просмотр всех заметок в удобном формате

### Drag & Drop интерфейс
- 🔄 Свободное перемещение задач
- 🎨 Визуальная обратная связь при перетаскивании
- 📌 Сохранение позиции после обновления страницы

### Аналитика и статистика
- 📈 Графики прогресса выполнения задач
- 🎯 Визуализация продуктивности с ApexCharts
- 📉 Отслеживание динамики выполнения

### AI-интеграция
- 🤖 Умные подсказки при создании задач
- 💡 Автоматическая категоризация заметок

## 🛠️ Технологии

- **Frontend Framework:** Vue.js 3 (Composition API)
- **Build Tool:** Vite 6
- **AI Integration:** Google Gemini API
- **Charts & Graphs:** Vue Apex Charts
- **Drag & Drop:** Vue Draggable / HTML5 Drag & Drop API
- **State Management:** Pinia / Composition API
- **Styling:** CSS3 / SCSS modules

## 🚀 Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/your-username/flow-core.git

# Перейти в директорию проекта
cd flow-core

# Установить зависимости
npm install

# Создать файл .env и добавить API ключ Gemini
echo "VITE_GEMINI_API_KEY=your_api_key_here" > .env

# Запустить в режиме разработки
npm run dev

# Собрать для production
npm run build
