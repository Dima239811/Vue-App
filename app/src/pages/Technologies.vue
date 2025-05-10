<script setup>
import SectionSecond from '@/components/SectionSecond.vue';

const text1 = "Искусственный интеллект в медицине используется для улучшения диагностики, анализа медицинских изображений и разработки персонализированных методов лечения. Он помогает врачам быстрее и точнее принимать решения, а также оптимизирует процессы управления пациентами и медицинскими данными."
import AIImage1 from '@/assets/images/AI_in_medicine.jpg';
import AIImage2 from '@/assets/images/AI_in_medicine_1.jpg';
const figcaption1 = "ИИ проводит операцию"
const figcaption2 = "Доктор изучает диагностику, проведенную при помощи ИИ"
const h41 = "ИИ  в медицине"

const text2 = "Искусственный интеллект (ИИ) активно внедряется в транспортную отрасль, трансформируя способы передвижения и управления транспортными системами. Его применение охватывает широкий спектр технологий и решений, которые повышают безопасность, эффективность и удобство транспортных услуг."
import AIImage3 from '@/assets/images/AI_in_traysport.jpg';
import AIImage4 from '@/assets/images/AI_in_traysport1.jpg';
const figcaption3 = "Беспилотное вождение автомобиля"
const figcaption4 = "Анализ слепых зон в ходе движения"
const h42 = "ИИ  в транспорте"

console.log("технолгогиии")
</script>

<template>
    <main>
        <div class="container2">
            <h2>Как технологии меняют жизнь</h2>
            <SectionSecond 
                :description="text1" 
                :imagePath1="AIImage1" 
                :imagePath2="AIImage2"
                :figcaptionText1="figcaption1" 
                :figcaptionText2="figcaption2" 
                :name="h41"
            />

            <SectionSecond 
                :description="text2" 
                :imagePath1="AIImage3" 
                :imagePath2="AIImage4"
                :figcaptionText1="figcaption3" 
                :figcaptionText2="figcaption4" 
                :name="h42"
            />

        </div>
    </main>
</template>

<style scoped>
</style>