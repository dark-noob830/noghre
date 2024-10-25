<template>
    <div class="sub_page">
        <div class="hero_area">
            <!-- header section strats -->
            <header class="header_section">
                <div class="container">
                    <nav class="navbar navbar-expand-lg custom_nav-container">
                        <a class="navbar-brand" href="index.html">
                            <span>
                                webprog.io
                            </span>
                        </a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="index.html">صفحه اصلی</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="menu.html">منو</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">درباره ما</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">تماس باما</a>
                                </li>
                            </ul>
                            <div class="user_option">
                                <a class="cart_link position-relative" href="cart.html">
                                    <i class="bi bi-cart-fill text-white fs-5"></i>
                                    <span class="position-absolute top-0 translate-middle badge rounded-pill">
                                        3
                                    </span>
                                </a>
                                <a href="login.html" class="btn-auth">
                                    ورود
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <!-- end header section -->
        </div>
    </div>
</template>

//
<script setup>
// import { useCartStore } from "../../store/cart"

// const { authUser } = useAuth()
// const cart = useCartStore();
// const countCartItems = computed(() => cart.count)

// </script>