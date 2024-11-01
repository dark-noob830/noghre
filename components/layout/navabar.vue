<template>
    <div class="navi">
        <p @click="open_nav()" class="open-nav ">
            menu
        </p>
        <section ref="nava" class="nav-back">

            <article class="logo">
                <h1>
                    <span class="logo-title">sequia jewelry</span>
                    <img class="logo-icon" src="/images/logo.png" alt="">
                </h1>
                <p @click="close_nav()" class="close-nav">
                    close
                </p>




            </article>
            <article class="navbvar-link">
                <nuxt-link to="/">پروفایل من </nuxt-link>
                <nuxt-link to="/"> فروشگاه </nuxt-link>
                <nuxt-link to="/"> سرمایه گذاری </nuxt-link>
                <nuxt-link to="/"> درباره ما </nuxt-link>
                <nuxt-link to="/"> تماس با ما </nuxt-link>
            </article>

        </section>



        <div class="nav-text">
            <h2>silver for every day</h2>
            <button class="button">
                محصولات
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const nava = ref(null)
const open_nav = () => {
    nava.value.classList.add('show-nav')
    console.log(nava.value.classList)
    console.log(nava)
}
const close_nav = () => {
    nava.value.classList.remove('show-nav')
    console.log(nava.value.classList)
    console.log(nava)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

.navi {
    position: absolute;
    height: 110vh;
    width: 100vw;
    text-align: center;
    z-index: 1;
}

.nav-back {
    background: #a8a8a854;
    /* background-image: url('/images/color.webp'); */
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    background: whitesmoke;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    transition-duration: 500ms;
    transform: translateX(100%);
}

.show-nav {
    transform: translateX(0%);
}

.logo-title {
    text-align: center;
    padding: 100px;
}



.logo h1 {
    /* font-size: 4rem; */
    font-family: "Noto Sans", sans-serif;
    font-weight: 600;
    /* font-style: italic; */
    text-transform: capitalize;
    display: none;
}



.navbvar-link a {
    text-align: right;
    display: block;
    border-bottom: solid 2px #a8a8a82f;
    font-size: 23px;
    text-decoration: none;
    margin: 10px;
    padding: 10px;
    color: rgb(0, 0, 0);
}

.nav-text {

    position: absolute;
    bottom: 100px;
    left: 100px;
    text-transform: uppercase;
    letter-spacing: 4px;
    z-index: -1;
}

.logo-icon {
    display: none;
}

@media screen and (min-width: 768px) {
    .nav-back {
        /* background-color: rgba(255, 255, 255, 0.45); */
        width: 30vw;
    }
}

@media screen and (min-width: 1020px) {

    .nav-back {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        align-items: baseline;
        width: 100vw;
        height: auto;
        padding: 10px 30px;
        transform: translateX(0);
    }

    .logo h1 {
        display: block;
    }

    .navbvar-link {
        display: inline-block !important;
    }

    .navbvar-link a {
        display: inline-block !important;
    }

    .open-nav,
    .close-nav {
        display: none;
    }

    .nav-text {
        z-index: 2;
    }

    .logo-icon {
        display: inline-block;
        width: 6rem;
        object-fit: cover;
    }
}
</style>