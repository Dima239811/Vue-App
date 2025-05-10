<template>
    <section class="first">
        <h4 class="example">{{ name }}</h4>

        <div class="content">
            <img :src="imagePath" class="page1_img" alt="Искусственный интеллект">
            <p>{{ description }}</p> 
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    imagePath: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    name: {
        type:String,
        required: true
    }
});
</script>
