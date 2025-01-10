<template>
  <div class="footer">
    <section class="footer-links">
      <ul>
        <li>قوانین</li>
        <li>سوالات متداول</li>
        <li>درباره ما</li>
      </ul>
    </section>
    <section class="brand_name">sequia jewelry</section>
    <section class="footer-end">
      <div class="footer-enamad">
        <img
          referrerpolicy="origin"
          src="https://Trustseal.eNamad.ir/logo.aspx?id=230370&amp;Code=Mx19KvgG0FELFD6WnbW9"
          alt=""
          width="25"
          style="cursor: pointer; background-color: white; border-radius: 5px"
          id="Mx19KvgG0FELFD6WnbW9"
        />
      </div>
      <article class="footer-icon">
        <a href="#">
          <i class="bi bi-telegram fs-2"></i>
        </a>
        <a href="#">
          <i class="bi bi-instagram fs-2"></i>
        </a>
        <a href="#">
          <i class="bi bi-whatsapp fs-2"></i>
        </a>
      </article>
    </section>
  </div>
</template>

<script setup></script>

<style>
.footer{
    background-color: blanchedalmond;
    height: auto;

}
.brand_name {
    text-align: center;
    font-size: 40px;
  }
  .footer-enamad {
    margin: 2rem auto;
    width: 12rem;
  }
  .footer-icon{
    text-align: center;
  }
  .footer-icon a {
    margin: 2rem;
  }
@media screen  and (min-width: 920px) {
  .footer {
    font-size: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
   
  }

  .footer-links {
    padding: 2rem;
    display: grid;
    place-items: center;
  }
  .footer-links ul {
    list-style: inside;
  }
  .footer-links li {
    margin-top: 10px;
  }
  .footer-end {
    display: grid;
    justify-items: center;
  }
  
  
}
</style>
