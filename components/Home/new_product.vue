<template>
    <div class="text-center">
        <div>
            
            <video autoplay loop muted>
                <source src="/home_video.mp4" type="video/mp4">
            </video>
        </div>
        <div class="nav-text">
            <h2>silver for every day</h2>
            <button class="button">
                محصولات
            </button>
        </div>
        <h2 class="product-title">
            محصولات جدید
        </h2>
        <div class="new-product">
            <UtilsCard class="product-card" image="/images/image2.webp" title="انگشتر" description=  'انگشتر' />
            <UtilsCard class="product-card" image="/images/image2.webp" title="گردن بند سوارسکی" description="گردن بند" />
            <UtilsCard class="product-card" image="/images/image2.webp" title="زمردی" description=" دستبند زمرد " />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.text-center {
    z-index: -1;
    background: #f0eee4;
    /* height: 200vh; */

}

video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: relative;
    left: 0;
    right: 0;
    /* top: 100px; */
    bottom: 0;
}

.nav-text {

position: absolute;
bottom: 100px;
left: 100px;
text-transform: uppercase;
letter-spacing: 4px;
z-index: 1;
}

.product-title {
    margin: 8rem auto 2rem auto;
}

.new-product {
    height: 570px;
    display: flex;
    width: 17rem;
    margin: 2rem auto;
    overflow-x: scroll;
    gap: 8px;
    scroll-snap-type: x mandatory;
    scrollbar-width: unset;
    background: #f0eee4;
    padding: 25px;
}


.new-product::-webkit-scrollbar {
    height: 10px;
    margin: 20px;
    border-radius: 5px;
    box-shadow: inset 0 0 5px grey;

}

.new-product::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.85);
    border-radius: 10px;
}




@media screen and (min-width: 992px) {
    video {
        top: 120px;
    }

    .new-product {
        justify-content: space-between;
        overflow: hidden;
        width: 100%;
        max-width: 1200px;
    }
}
</style>