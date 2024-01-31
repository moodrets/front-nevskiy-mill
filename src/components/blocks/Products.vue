<template>
    <div class="centered flex-1 flex flex-col">
        <div class="flex-1 flex flex-col gap-10 lg:flex-row">
            <div class="relative z-[20] flex flex-col pb-10 lg:w-1/3 lg:flex-none">
                <h2 class="block-title mb-10 lg:mb-20">ПРОДУКЦИЯ</h2>
                <TabsTitles
                    class="flex flex-wrap lg:flex-col gap-3 items-start mb-8"
                    name="products"
                    :items="[
                        {key: 'classic-breads', label: 'Классические хлебцы'},
                        {key: 'mini-breads', label: 'Мини-хлебцы'},
                        {key: 'mini-breads-nogluten', label: 'Мини-хлебцы (без глютена'},
                        {key: 'sport-line-breads', label: 'Спортивная линейка'},
                    ]"
                />
                <p class="mt-auto text-[18px] font-bold leading-[1.3] xl:text-[20px]">
                    Мини-хлебцы из глютеновой муки,<br>
                    вертикальный премиум пакет<br>
                    с плоским дном
                </p>
                <div class="bg-accent h-[2px] w-1/2 absolute bottom-0 left-0"></div>
            </div>
            <div class="lg:flex-1 lg:min-w-0">
                <TabsBodies name="products">
                    <template #classic-breads>
                        <ProductsSlider />
                    </template>
                    <template #mini-breads>
                        <ProductsSlider />
                    </template>
                    <template #mini-breads-nogluten>
                        <ProductsSlider />
                    </template>
                    <template #sport-line-breads>
                        <ProductsSlider />
                    </template>
                </TabsBodies>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ProductsSlider from '@/components/blocks/ProductsSlider.vue'
</script>