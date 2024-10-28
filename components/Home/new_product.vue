<template>
    <div class="text-center">
        <video autoplay loop muted>
            <source src="/home_video.mp4" type="video/mp4">
        </video>
        <h2 class="m-auto">
            محصولات جدید
        </h2>
        <div class="new-product">

            <UtilsCard image="/images/image2.webp" title="انگشتر" description="سلام بیا بخر" />
            <UtilsCard image="/images/image2.webp" title="انگشتر" description="سلام بیا بخر" />
            <UtilsCard image="/images/image2.webp" title="انگشتر" description="سلام بیا بخر" />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -10;
    opacity: 0.9;
}

.text-center h2 {

    background: #f0eee4;

}

.new-product {
    display: grid;
    background: #f0eee4;
    padding: 25px;
}

@media screen and (min-width: 768px) {
    .new-product {
        grid-template-columns: 50% 50%;

    }
}

@media screen and (min-width: 1020px) {
    .new-product {
        grid-template-columns: 1fr 1fr 1fr;

    }
}
</style>