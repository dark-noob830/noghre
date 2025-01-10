<template>
    <div class="about_us">
        <section class="service rev">
            <article class="service-image1">
                <img src="/images/home-page-1.jpg" alt="">
                <button class="button"> follow us</button>
            </article>
            <article class="service-title">
                <h2>2024 لورم ایپسوم</h2>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                    نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                    حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                    رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،

                </p>
                <button class="button">
                    Shop now
                </button>
            </article>
        </section>
    </div>
</template>

<script setup>

</script>

<style scoped>
.service-image {
    width: 34%;
    margin: 0 auto;
    object-fit: cover;
}

.service-image1{
    width: 34%;
    margin: 0 auto;
    object-fit: cover;
    
}

@media screen and (min-width: 1020px) {
    .service {
        margin: 5rem auto;
        display: flex;
        gap: 2rem;
        align-items: center;
    }

    .service-image {
        flex: 0 0 45%;
    }


    .rev {
        flex-direction: row-reverse;
    }
}
</style>