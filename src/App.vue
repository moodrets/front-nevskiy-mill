<template>
    <AppHeader></AppHeader>
    <AppBlock data-hash="about">
        <About></About>
    </AppBlock>
    <AppBlock data-hash="products">

    </AppBlock>
    <AppBlock data-hash="partners">
        <Partners></Partners>
    </AppBlock>
    <AppBlock data-hash="blog">

    </AppBlock>
    <AppBlock data-hash="contacts">
        <Contacts></Contacts>
    </AppBlock>
    <Offcanvas>
        <SpyBlocksMenu class="spy-block-menu-mobile" />
    </Offcanvas>
</template>

<script setup lang="ts">
import AppHeader from '@/components/blocks/AppHeader.vue'
import Contacts from '@/components/blocks/Contacts.vue'
import Partners from '@/components/blocks/Partners.vue'
import About from '@/components/blocks/About.vue'
</script>