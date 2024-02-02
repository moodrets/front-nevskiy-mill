<template>
    <AppHeader />
    <div class="relative z-[0]">
        <ThreeObjects />
        <section class="flex flex-col pt-[148px] pb-10 lg:pt-[200px] xl:pb-[140px] xl:min-h-dvh" data-hash="about">
            <About />
        </section>
        <section class="flex flex-col pt-[148px] pb-10 lg:pt-[200px] xl:pb-[140px] xl:min-h-dvh" data-hash="about">
            <AboutProduct />
        </section>
        <section class="flex flex-col pt-[148px] pb-10 lg:pt-[200px] xl:pb-[140px] xl:min-h-dvh" data-hash="about">
            <AboutHistory />
        </section>
    </div>
    <section class="flex flex-col pt-[148px] pb-10 lg:pt-[200px] xl:pb-[140px] xl:min-h-dvh overflow-hidden" data-hash="products">
        <Products />
    </section>
    <section class="flex flex-col pt-[148px] pb-10 lg:pt-[200px] xl:pb-[140px] xl:min-h-dvh" data-hash="partners">
        <Partners />
    </section>
    <section class="flex flex-col pt-[148px] pb-10 lg:pt-[200px] xl:pb-[140px] xl:min-h-dvh" data-hash="blog">
        <Blog />
    </section>
    <section class="flex flex-col pt-[148px] pb-10 lg:pt-[200px] xl:pb-[140px] xl:min-h-dvh" data-hash="contacts">
        <Contacts />
    </section>
    <Offcanvas>
        <SpyBlocksMenu class="spy-menu-mobile" />
    </Offcanvas>
    <Modal name="demoModal">
        <h2 class="text-[22px] font-bold mb-6">Demo modal</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus, aperiam blanditiis, earum deleniti quo magnam optio minima dicta hic maxime voluptas voluptatibus alias illum voluptatem repudiandae quasi, ab eligendi.
        </p>
    </Modal>
</template>

<script setup lang="ts">
import AppHeader from '@/components/blocks/AppHeader.vue'
import About from '@/components/blocks/About.vue'
import AboutProduct from '@/components/blocks/AboutProduct.vue'
import AboutHistory from '@/components/blocks/AboutHistory.vue'
import Products from '@/components/blocks/Products.vue'
import Partners from '@/components/blocks/Partners.vue'
import Blog from '@/components/blocks/Blog.vue'
import Contacts from '@/components/blocks/Contacts.vue'
</script>