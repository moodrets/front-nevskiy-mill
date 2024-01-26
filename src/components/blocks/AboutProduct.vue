<template>
    <div class="centered flex-1 flex flex-col">
        <div class="flex-1 flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20 xl:gap-32">
            <div class="relative h-[inherit] flex flex-col lg:w-1/3 lg:flex-none">
                <h2 class="block-title mb-10 lg:mb-20">О ПРОДУКТЕ</h2>
                <div class="space-y-6">
                    
                    <div v-for="(value, valueIndex) in descValues" :key="valueIndex">
                        <div class="flex gap-6">
                            <div class="flex-none w-12">
                                <img :src="`${routerPath}img/${value.icon}.svg`" alt="">
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="font-bold text-[16px]">{{ value.title }}</div>
                                <div class="text-[12px]">{{ value.text }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:flex-1 lg:min-w-0">
                
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { routerPath } from '@/routes'

interface DescValue {
    icon: string,
    title: string,
    text: string
}

const descValues = ref<DescValue[]>([
    {
        icon: 'value-1',
        title: 'Полностью натуральный',
        text: 'Внутри только овощи и фрукты, сохранившие свои полезные свойства.'
    },
    {
        icon: 'value-2',
        title: 'Традиционный вкус',
        text: 'Не содержат парабенов, консервантов, химии и сахара. При этом отличаются приятным вкусом.'
    },
    {
        icon: 'value-3',
        title: 'Доступны в цене',
        text: 'Мы установили справедливую цену, благодаря которой каждый сможет позволить себе здоровый перекус.'
    },
    {
        icon: 'value-4',
        title: 'Уникальная упаковка',
        text: 'Стильный премиальный дизайн, который вы сразу заметите на полках.'
    }
])
</script>