<template>
    <div>
        <div class="card m-auto " style="width: 20rem;">
            <img :src="props.image" class="card-img-top" alt="...">
            <img src="/images/home-page-card.webp" class="image2" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ props.title }}</h5>
                <div class="card-text">
                    <p>{{ props.description }}</p>
                    <p>تومان {{ props.price }}</p>
                </div>

                <button class="button"> مشاهده </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['title', 'description', 'image', 'price'])
</script>

<style scoped>
.card {
    position: relative;
    border-radius: 20px;
    scroll-snap-align: center;
    box-shadow: 0px 4px 10px rgb(0, 0, 0, 0.1);
    transition: all 0.2s linear;


}

.card:hover {
    /* box-shadow: 0px 4px 10px rgb(0, 0, 0, 0.4); */
}

.image2 {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    transition: all 0.3s linear;
}

.card-img-top {
    border-radius: 20px;
}

.card:hover .image2 {
    opacity: 1;
}
</style>