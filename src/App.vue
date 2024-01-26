<template>
    <AppHeader></AppHeader>
    <section class="flex flex-col pt-32 pb-10 lg:pt-[200px] lg:pb-[140px] lg:min-h-dvh" data-hash="about">
        <About></About>
    </section>
    <section class="flex flex-col pt-32 pb-10 lg:pt-[200px] lg:pb-[140px] lg:min-h-dvh" data-hash="about">
        <AboutProduct></AboutProduct>
    </section>
    <section class="flex flex-col pt-32 pb-10 lg:pt-[200px] lg:pb-[140px] lg:min-h-dvh" data-hash="about">
        <AboutHistory></AboutHistory>
    </section>
    <section class="flex flex-col pt-32 pb-10 lg:pt-[200px] lg:pb-[140px] lg:min-h-dvh" data-hash="products">
        <Products></Products>
    </section>
    <section class="flex flex-col pt-32 pb-10 lg:pt-[200px] lg:pb-[140px] lg:min-h-dvh" data-hash="partners">
        <Partners></Partners>
    </section>
    <section class="flex flex-col pt-32 pb-10 lg:pt-[200px] lg:pb-[140px] lg:min-h-dvh" data-hash="blog">
        <Blog></Blog>
    </section>
    <section class="flex flex-col pt-32 pb-10 lg:pt-[200px] lg:pb-[140px] lg:min-h-dvh" data-hash="contacts">
        <Contacts></Contacts>
    </section>
    <Offcanvas>
        <SpyBlocksMenu class="spy-block-menu-mobile" />
    </Offcanvas>
</template>

<script setup lang="ts">
import AppHeader from '@/components/blocks/AppHeader.vue'
import Contacts from '@/components/blocks/Contacts.vue'
import Partners from '@/components/blocks/Partners.vue'
import About from '@/components/blocks/About.vue'
import AboutProduct from '@/components/blocks/AboutProduct.vue'
import AboutHistory from '@/components/blocks/AboutHistory.vue'
import Blog from '@/components/blocks/Blog.vue'
import Products from '@/components/blocks/Products.vue'
</script>