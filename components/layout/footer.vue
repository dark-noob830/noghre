<template>
    <div class="footer">
        <section class="footer-links">
            <a href="#">
                قوانین
            </a>
            <a href="#">
                سوالات
            </a>
        </section>
        <section class="brand_name">
            sequia jewelry
        </section>
        <section class="footer-icon">
            <a href="#">
                تلگرام
            </a>
            <a href="#">
                اینستا
            </a>
        </section>
    </div>
</template>

<script setup>

</script>

<style>
.footer{
    font-size: 20px;
    height: 10rem;
    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    place-items: center;
    background-color: blanchedalmond;
}
.brand_name{
    font-size: 40px;
}
.footer-links{
    padding: 2rem;
    display: grid;
    place-items: center;
}
.footer-icon a{
    margin: 2rem;
}
</style>