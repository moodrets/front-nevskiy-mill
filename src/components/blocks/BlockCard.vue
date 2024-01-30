<template>
    <article class="flex flex-col gap-4 md:flex-row md:gap-8">
        <div class="md:w-1/2 md:flex-none">
            <img class="rounded-[24px]" :src="`${routerPath}img/blog-pic.jpg`" alt="">
        </div>
        <div class="md:flex-1 md:min-w-0">
            <div class="mb-4 text-[18px] leading-[1.1] font-bold">Хлебцы с лососем, авокадо и творожным сыром</div>
            <p class="text-[13px] leading-[1.3]">
                В состав входят обдирная ржаная мука и пшеничная 1-го
                сорта, что хорошо влияет на обмен веществ и помогает
                оставаться в форме. Изюминку вкусу добавляют сушеные
                вяленые томаты и молотый базилика
            </p>
            <a href="#" class="mt-5 app-button app-button--light font-medium text-[13px] leading-[1.4]">Подробнее</a>
        </div>
    </article>
</template>

<script setup lang="ts">
import { routerPath } from '@/routes'
</script>