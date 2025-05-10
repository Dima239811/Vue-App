<template>
    <div id="app">
      <div class="container2">
        <h2>IT-Курсы</h2>
        <RouterLink to="/yourWayPage">Вернуться на страницу "Ваш путь"</RouterLink>

  
        <!-- Поле для поиска -->
        <div class="search-box">
          <input type="text" v-model="searchQuery" placeholder="Поиск по названию курса">
        </div>
  
        <!-- Список курсов -->
        <div class="course-list">
          <CourseCard
            v-for="course in filteredCourses"
            :key="course.id"
            :course="course"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import CourseCard from './CourseCard.vue'; 
  
  const searchQuery = ref(''); // Переменная для поиска
  const courses = ref([]); // Изначально пустой массив курсов
  
  // Фильтрация курсов по поисковому запросу
  const filteredCourses = computed(() => {
    return courses.value.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
  
  // Метод для загрузки данных с сервера
  async function fetchCourses() {
    try {
      const response = await fetch('http://localhost:3000/courses');
      if (!response.ok) {
        throw new Error('Ошибка при загрузке данных');
      }
      courses.value = await response.json();
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }
  
  // Загружаем данные при монтировании компонента
  onMounted(() => {
    fetchCourses();
  });
  </script>
  