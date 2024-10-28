<template>
    <div>
        <div class="card m-auto" style="width: 18rem;">
            <img :src="props.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ props.title }}</h5>
                <p class="card-text">{{ props.description }}</p>
                <button class="button"> مشاهده </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['title', 'description', 'image'])
</script>

<style scoped>
.card {
    border-radius: 20px;
}

.card-img-top {
    border-radius: 20px;
}

.button {
    margin-top: 20px;
    padding: 6px 40px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, 0.7);

    &:hover {
        background-color: rgba(0, 0, 0, 0.85);
        color: white;
    }
}
</style>