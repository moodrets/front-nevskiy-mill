<template>
    <article class="flex flex-col gap-4 md:flex-row xl:gap-8">
        <div class="md:w-1/2 md:flex-none lg:w-2/5 xl:w-1/2">
            <img class="rounded-[24px]" :src="`${routerPath}img/blog-pic.jpg`" alt="">
        </div>
        <div class="md:flex-1 md:min-w-0">
            <div class="mb-4 text-[18px] leading-[1.1] font-bold xl:text-[22px]">
                Хлебцы с лососем, авокадо и творожным сыром
            </div>
            <p class="text-[14px] leading-[1.4]">
                В состав входят обдирная ржаная мука и пшеничная 1-го
                сорта, что хорошо влияет на обмен веществ и помогает
                оставаться в форме. Изюминку вкусу добавляют сушеные
                вяленые томаты и молотый базилика
            </p>
            <button
                type="button" 
                class="mt-5 app-button app-button--light font-medium text-[13px] leading-[1.4]"
                v-article-more="articleMoreData"
            >Подробнее</button>
        </div>
    </article>
</template>

<script setup lang="ts">
import { routerPath } from '@/routes'

const articleMoreData = {
    img: `${routerPath}img/blog-view-pic.png`,
    title: 'Хлебцы с лососем, авокадо и творожным сыром',
    text: `В состав входят обдирная ржаная мука и пшеничная 1-го
        сорта, что хорошо влияет на обмен веществ и помогает
        оставаться в форме. Изюминку вкусу добавляют сушеные
        вяленые томаты и молотый базилика, которые в свою
        очередь благоприятно влияют на состояние кожи
        и способствуют выводу токсинов из организма.
        В состав входят обдирная ржаная мука и пшеничная 1-го
        сорта, что хорошо влияет на обмен веществ и помогает
        оставаться в форме. Изюминку вкусу добавляют сушеные
        вяленые томаты и молотый базилика, которые в свою
        очередь благоприятно влияют на состояние кожи
        и способствуют выводу токсинов из организма.
    `
}
</script>