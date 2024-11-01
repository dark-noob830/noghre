<template>
    <div>
        <section class="service">
            <article class="service-image">
                <img src="/images/jpg.avif" alt="">
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
        <section class="service rev">
            <article class="service-image">
                <img src="/images/jpg.avif" alt="">
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

<style>
.service-image {
    width: 90%;
    margin: 0 auto;
    object-fit: cover;
}


.service-title {
    padding: 2rem;
    margin: 0 auto;
    max-width: 40rem;
}

@media screen and (min-width: 1020px) {
    .service {
        margin: 5rem auto;
        display: flex;
        height: 100vh;
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