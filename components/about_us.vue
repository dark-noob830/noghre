<template>
    <div class="about_us">
        <section class="service rev">
            <article class="service-image">
                <img src="/images/jpg.avif" alt="">
                <button class="button"> follow us</button>
            </article>
            <article class="service-title">
                <h2>درباره ما </h2>
                <p>درباره ما
با بیش از ۵ سال سابقه فعالیت درخشان، گالری سکویا به یکی از نام‌های معتبر در صنعت نقره تبدیل شده است. ما با ارائه خدمات متنوع، از طراحی و ساخت زیورآلات سفارشی گرفته تا سرمایه‌گذاری در نقره، تلاش می‌کنیم نیازهای شما را با بالاترین کیفیت برآورده کنیم.

آنچه ما را متمایز می‌کند:
 • تعمیرات تخصصی: احیای زیبایی و کارایی زیورآلات نقره شما با تکیه بر تجربه و مهارت تیم حرفه‌ای ما.
 • ساخت کارهای سفارشی: طراحی و خلق آثار منحصربه‌فرد بر اساس سلیقه و خواسته شما.
 • فرصت سرمایه‌گذاری: امکان خرید نقره خام، ساچمه و شمش نقره برای سرمایه‌گذاری مطمئن و سودآور.

در [نام فروشگاه شما]، ما متعهد به ارائه کیفیت برتر، خدمات قابل‌اعتماد و رضایت شما هستیم. همراه ما، ارزش‌های نقره‌ای را به سبک زندگی خود بیافزایید!</p>
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