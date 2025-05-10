<template>
    <form id="form_id" @submit.prevent="handleSubmit">
        <div class="container-form">
            <h5>Заполните форму и откройте <br>
                двери в мир технологий!</h5>

            <input type="text" id="username" placeholder="Имя" v-model="username">
            <input type="text" id="userphone" placeholder="Телефон" v-model="userphone">
            <input type="email" id="usermail" placeholder="Почта" v-model="usermail">

            <button type="submit">Запись на курс</button>

        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const userphone = ref('');
const usermail = ref('');

// Определяем событие для отправки данных родителю
const emit = defineEmits(['participant-added']);

function handleSubmit() {
    const usernameValue = username.value.trim();
    const userphoneValue = userphone.value.trim();
    const usermailValue = usermail.value.trim();

    console.log(usernameValue, userphoneValue, usermailValue);

    if (!usernameValue || !userphoneValue || !usermailValue) {
        alert('Все поля должны быть заполнены!');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(usermailValue)) {
        alert('Пожалуйста, введите корректный email!');
        return;
    }

    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(userphoneValue)) {
        alert('Пожалуйста, введите корректный телефон (11 цифр)!');
        return;
    }

    // Создаем объект с данными участника
    const newUser  = {
        name: usernameValue,
        phone: userphoneValue,
        email: usermailValue,
    };

    // Отправляем POST-запрос на сервер
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser ),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка при отправке данных');
        }
        return response.json(); 
    })
    .then(data => {
        // Очистка полей формы
        username.value = '';
        userphone.value = '';
        usermail.value = '';

        // Отправляем событие родителю с новым участником
        emit('participant-added', data);

        alert('Участник успешно добавлен!');
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при добавлении участника.');
    });
}
</script>