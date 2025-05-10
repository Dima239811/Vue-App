<template>
    <div class="course-card">
      <img :src="course.image" :alt="course.title">
      <h3>{{ course.title }}</h3>
      <p>{{ course.shortDescription }}</p>
  
      <!-- Кнопка для показа/скрытия деталей -->
      <button @click="toggleDetails">
        {{ course.showDetails ? 'Скрыть детали' : 'Показать детали' }}
      </button>
  
      <!-- Условная отрисовка деталей курса -->
      <div class="course-details" v-if="course.showDetails">
        <p><strong>Продолжительность:</strong> {{ course.duration }}</p>
        <p><strong>Уровень:</strong> {{ course.level }}</p>
        <p><strong>Цена:</strong> {{ course.price }} руб.</p>
      </div>
    </div>
  </template>
  
  <script setup>
import { defineProps } from 'vue';
  
  const props = defineProps({
    course: {
      type: Object,
      required: true
    }
  });
  
  // Метод для показа/скрытия деталей
  function toggleDetails() {
    props.course.showDetails = !props.course.showDetails;
  }
  </script>
