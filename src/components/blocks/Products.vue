<template>
    <div class="centered flex-1 flex flex-col">
        <div class="flex-1 flex flex-col gap-10 lg:flex-row">
            <div class="relative flex flex-col justify-between pb-10 lg:w-1/3 lg:flex-none">
                <h2 class="block-title mb-10 lg:mb-20">ПРОДУКЦИЯ</h2>
                <TabsTitles
                    class="flex flex-wrap lg:flex-col gap-3 items-start mb-8"
                    name="products"
                    :items="[
                        {key: 'classic-breads', label: 'Классические хлебцы'},
                        {key: 'mini-breads', label: 'Мини-хлебцы'},
                        {key: 'mini-breads-nongluten', label: 'Мини-хлебцы (без глютена'},
                        {key: 'sport-line-breads', label: 'Спортивная линейка'},
                    ]"
                />
                <p class="text-[18px] font-bold leading-[1.3] xl:text-[20px]">
                    Мини-хлебцы из глютеновой муки,<br>
                    вертикальный премиум пакет<br>
                    с плоским дном
                </p>
                <div class="bg-accent h-[2px] w-1/2 absolute bottom-0 left-0"></div>
            </div>
            <div class="lg:flex-1 lg:min-w-0">
                <div class="lg:h-[70vh] lg:p-1 lg:pr-2 lg:overflow-y-auto">
                    <TabsBodies name="products">
                        <template #classic-breads>
                        </template>
                        <template #mini-breads>
                        </template>
                        <template #mini-breads-nongluten>
                        </template>
                        <template #sport-line-breads>
                        </template>
                    </TabsBodies>
                </div>
            </div>
        </div>
    </div>
</template>