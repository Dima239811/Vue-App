<script setup>
import FormComponent from '@/components/FormComponent.vue';
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const users = ref([]); // Список участников
const loading = ref(true); // Состояние загрузки
const error = ref(null); // Сообщение об ошибке

// Функция для выполнения GET-запроса
function fetchUsers() {
  const xhr = new XMLHttpRequest();
  const url = 'http://localhost:3000/users';

  xhr.open('GET', url, true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      users.value = data; // Обновляем список участников
    } else {
      error.value = 'Ошибка при загрузке участников.';
    }
    loading.value = false;
  };

  xhr.onerror = function () {
    error.value = 'Ошибка сети.';
    loading.value = false;
  };

  xhr.send();
}

// Обработчик события добавления участника
function handleParticipantAdded(newParticipant) {
  users.value.push(newParticipant); // Добавляем нового участника в список
}

// Загружаем участников при монтировании компонента
onMounted(() => {
  fetchUsers();
});

</script>

<template>
    <main>
        <div class="container1">
            <h2>Начни свой путь в IT</h2>

            <p>В современном мире информационных технологий (IT) открываются безграничные возможности для карьерного роста и 
                личного развития. Если вы хотите стать частью этой динамичной и увлекательной сферы, наш раздел "Начни свой путь в 
                IT" поможет вам сделать первые шаги к успешной карьере.</p>

            <RouterLink to="/coursesList" class="newLink">Список курсов</RouterLink>  

            <FormComponent @participant-added="handleParticipantAdded"/>

            <h4 class="userlist">Список участников</h4>
            <!-- Список участников -->
            <div id="users-list">
            <p v-if="loading">Загрузка участников...</p>
            <p v-else-if="error">{{ error }}</p>
            <p v-else-if="users.length === 0">Участники не найдены.</p>
            <div v-else class="users-container">
                <div v-for="user in users" :key="user.id" class="user-card">
                <h3>{{ user.name }}</h3>
                <p>✉️ {{ user.email }}</p>
                <p>📞 {{ user.phone }}</p>
                </div>
            </div>
            </div>

        </div>
    </main>
</template>
