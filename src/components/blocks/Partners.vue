<template>
    <div class="centered my-auto">
        <div class="flex flex-col gap-10 lg:flex-row lg:gap-20 xl:gap-32">
            <div class="relative lg:w-1/3 lg:flex-none pb-10">
                <h2 class="block-title mb-10 lg:mb-20">ПАРТНЕРЫ</h2>
                <p class="text-[14px] leading-[1.4]">
                    Текст о наших партнерах: В составе хлебцев используем исключительно
                    высококачественное сырье, что позволяет сделать их состав разноо-
                    бразным и вкусным. Каждая линейка изготавливается по эксклюзивной
                    экструзионной технологии, без использования обжарки на масле, кото-
                    рое приводит к появлению канцерогенов. Благодаря этому внутри со-
                    держится максимальное количество питательных веществ.
                </p>
                <div class="bg-accent h-[2px] w-1/2 absolute bottom-0 left-0"></div>
            </div>
            <div class="lg:flex-1 lg:min-w-0">
                <div class="grid items-center grid-cols-2 gap-10 xl:gap-x-14">

                    <div v-for="(partner, partnerIndex) in 6" :key="partnerIndex">
                        <a href="#" class="block transition-all duration-300 hover:scale-[1.05]">
                            <img :src="`${routerPath}partners/partner-${partnerIndex+1}.png`" alt="">
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { routerPath } from '@/routes'
</script>