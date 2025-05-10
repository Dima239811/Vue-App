<template>
    <section>
        <h4 class="example">{{ name }}</h4>
        <p>{{ description }}</p>

        <div class="images_page_2">
            <figure>
                <img :src="imagePath1" alt="Изображение 1">
                <figcaption>{{ figcaptionText1 }}</figcaption>
            </figure>
            
            <figure>
                <img :src="imagePath2" alt="Изображение 2">
                <figcaption>{{ figcaptionText2 }}</figcaption>                    
            </figure>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    imagePath1: {
        type: String,
        required: true
    },
    imagePath2: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    name: {
        type: String,
        required: true
    },
    figcaptionText1: {
        type: String,
        required: true
    },
    figcaptionText2: {
        type: String,
        required: true
    }
});
</script>