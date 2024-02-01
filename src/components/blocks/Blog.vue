<template>
    <div class="centered flex-1 flex flex-col">
        <div class="flex-1 flex flex-col gap-10 lg:flex-row">
            <div class="relative flex flex-col justify-between pb-10 lg:w-1/3 lg:flex-none">
                <h2 class="block-title mb-10 lg:mb-20">БЛОГ</h2>
                <TabsTitles
                    class="flex flex-wrap lg:flex-col gap-3 items-start mb-8"
                    name="blog"
                    :items="[
                        {key: 'recipes', label: 'Рецепты'},
                        {key: 'news', label: 'Новости'},
                        {key: 'video-recipes', label: 'Видео-рецепты'},
                        {key: 'socials', label: 'Социальные сети'},
                    ]"
                />
                <p class="text-[13px] leading-[1.4]">
                    В составе хлебцев используем исключительно высококачественное
                    сырье, что позволяет сделать их состав разнообразным и вкусным.
                    Каждая линейка изготавливается по эксклюзивной экструзионной тех-
                    нологии, без использования обжарки на масле, которое приводит к по-
                    явлению канцерогенов. Благодаря этому внутри содержится максималь-
                    ное количество питательных веществ
                </p>
                <div class="bg-accent h-[2px] w-1/2 absolute bottom-0 left-0"></div>
            </div>
            <div class="lg:flex-1 lg:min-w-0">
                <div class="lg:h-[70vh] lg:p-1 lg:pr-2 lg:overflow-y-auto">
                    <TabsView>
                        <TabsBodies name="blog">
                            <template #recipes>
                                <div class="space-y-6">
                                    <BlogCard></BlogCard>
                                    <BlogCard></BlogCard>
                                    <BlogCard></BlogCard>
                                    <BlogCard></BlogCard>
                                </div>
                            </template>
                            <template #news>
                                <div class="space-y-6">
                                    <BlogCard></BlogCard>
                                    <BlogCard></BlogCard>
                                </div>
                            </template>
                            <template #video-recipes>
                                <div class="space-y-6">
                                    <BlogCard></BlogCard>
                                </div>
                            </template>
                            <template #socials>
                                <div class="space-y-6">
                                    <BlogCard></BlogCard>
                                    <BlogCard></BlogCard>
                                </div>
                            </template>
                        </TabsBodies>
                    </TabsView>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BlogCard from '@/components/blocks/BlogCard.vue'
</script>