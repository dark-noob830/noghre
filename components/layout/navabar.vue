<template>
    <div class="sub_page">
        <div class="hero_area">
            <!-- header section strats -->
            <header class="header_section">
                <div class="container">
                    <nav class="navbar navbar-expand-lg custom_nav-container">
                        <NuxtLink class="navbar-brand" to="/">
                            <span>
                                webprog.io
                            </span>
                        </NuxtLink>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item" :class="{ active: $route.path === '/' }">
                                    <NuxtLink class="nav-link" to="/">صفحه اصلی</NuxtLink>
                                </li>

                                <li class="nav-item" :class="{ active: $route.path === '/menu' }">
                                    <NuxtLink class="nav-link" to="/menu">منو</NuxtLink>
                                </li>

                                <li class="nav-item" :class="{ active: $route.path === '/about-us' }">
                                    <NuxtLink class="nav-link" to="/about-us">درباره ما</NuxtLink>
                                </li>

                                <li class="nav-item" :class="{ active: $route.path === '/contact-us' }">
                                    <NuxtLink class="nav-link" to="/contact-us">تماس باما</NuxtLink>
                                </li>
                            </ul>
                            <div class="user_option">
                                <NuxtLink class="cart_link position-relative" to="/cart">
                                    <i class="bi bi-cart-fill text-white fs-5"></i>
                                    <ClientOnly>
                                        <span v-if="countCartItems > 0"
                                            class="position-absolute top-0 translate-middle badge rounded-pill">
                                            {{ countCartItems }}
                                        </span>
                                    </ClientOnly>
                                </NuxtLink>
                                <NuxtLink v-if="authUser" to="/profile" class="btn-auth">
                                    پروفایل
                                </NuxtLink>
                                <NuxtLink v-else to="/auth/login" class="btn-auth">
                                    ورود
                                </NuxtLink>
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