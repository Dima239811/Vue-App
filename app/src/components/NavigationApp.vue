<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
<header>
        <RouterLink to="/">
            <div class="NameSite">
                <h1>Технологии будущего</h1>
                <h3>Откройте для себя будущее уже сегодня</h3>
            </div>
        </RouterLink>
        <hr>

        <nav>
            <ul class="nav_list">
                <RouterLink to="/">Главная</RouterLink>
                <RouterLink to="/technologies">Технологии</RouterLink>
                <RouterLink to="/yourWayPage">Ваш путь</RouterLink>
            </ul>
        </nav>

    </header>
</template>

<style scoped>
</style>