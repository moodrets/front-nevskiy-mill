<template>
    <div class="products-slider swiper js-products-slider">
        <div class="swiper-wrapper">
            <div
                class="swiper-slide mr-10"
                v-for="(slide, slideIndex) in slides"
                :key="slideIndex"
            >
                <div class="flex flex-col gap-4 md:flex-row">
                    <div class="md:w-1/2">
                        <img :src="slide.img" alt="">
                    </div>
                    <div class="md:w-1/2">
                        <div class="slider-controls flex gap-4 justify-end mb-8 xl:mb-12">
                            <button
                                type="button"
                                class="app-button app-button--light py-0 px-3 slider-prev"
                            >
                                <div class="block w-14 h-8 svg-icon">
                                    <svg><use :xlink:href="`${routerPath}svg-sprite.svg#arrow-left`"></use></svg>
                                </div>
                            </button>
                            <button
                                type="button"
                                class="app-button app-button--light py-0 px-3 slider-next"
                            >
                                <div class="block w-14 h-8 svg-icon">
                                    <svg><use :xlink:href="`${routerPath}svg-sprite.svg#arrow-right`"></use></svg>
                                </div>
                            </button>
                        </div>
                        <div class="font-bold mb-5 text-[18px] xl:text-[22px]">{{ slide.title }}</div>
                        <div class="space-y-4 text-[12px] leading-[1.4] xl:text-[14px]" v-html="slide.text"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { routerPath } from '@/routes';

const slides = [
    {
        img: `${routerPath}img/product-pic.png`,
        title: 'Мини-хлебцы с вялеными томатами и базиликом',
        text: `
            <p>
                В состав входят обдирная ржаная мука и пшеничная 1-го
                сорта, что хорошо влияет на обмен веществ и помогает
                оставаться в форме. Изюминку вкусу добавляют сушеные
                вяленые томаты и молотый базилика, которые в свою
                очередь благоприятно влияют на состояние кожи
                и способствуют выводу токсинов из организма.
            </p>
            <p>
                <strong>Состав</strong>: мука ржаная обдирная, мука пшеничная
                1-го сорта, томат вяленый сушеный молотый,
                базилик сушеный молотый, соль, вода.
            </p>
        `
    },
    {
        img: `${routerPath}img/product-pic.png`,
        title: 'Мини-хлебцы с вялеными томатами и базиликом',
        text: `
            <p>
                В состав входят обдирная ржаная мука и пшеничная 1-го
                сорта, что хорошо влияет на обмен веществ и помогает
                оставаться в форме. Изюминку вкусу добавляют сушеные
                вяленые томаты и молотый базилика, которые в свою
                очередь благоприятно влияют на состояние кожи
                и способствуют выводу токсинов из организма.
            </p>
            <p>
                <strong>Состав</strong>: мука ржаная обдирная, мука пшеничная
                1-го сорта, томат вяленый сушеный молотый,
                базилик сушеный молотый, соль, вода.
            </p>
        `
    },
    {
        img: `${routerPath}img/product-pic.png`,
        title: 'Мини-хлебцы с вялеными томатами и базиликом',
        text: `
            <p>
                В состав входят обдирная ржаная мука и пшеничная 1-го
                сорта, что хорошо влияет на обмен веществ и помогает
                оставаться в форме. Изюминку вкусу добавляют сушеные
                вяленые томаты и молотый базилика, которые в свою
                очередь благоприятно влияют на состояние кожи
                и способствуют выводу токсинов из организма.
            </p>
            <p>
                <strong>Состав</strong>: мука ржаная обдирная, мука пшеничная
                1-го сорта, томат вяленый сушеный молотый,
                базилик сушеный молотый, соль, вода.
            </p>
        `
    },
    {
        img: `${routerPath}img/product-pic.png`,
        title: 'Мини-хлебцы с вялеными томатами и базиликом',
        text: `
            <p>
                В состав входят обдирная ржаная мука и пшеничная 1-го
                сорта, что хорошо влияет на обмен веществ и помогает
                оставаться в форме. Изюминку вкусу добавляют сушеные
                вяленые томаты и молотый базилика, которые в свою
                очередь благоприятно влияют на состояние кожи
                и способствуют выводу токсинов из организма.
            </p>
            <p>
                <strong>Состав</strong>: мука ржаная обдирная, мука пшеничная
                1-го сорта, томат вяленый сушеный молотый,
                базилик сушеный молотый, соль, вода.
            </p>
        `
    }
]
</script>