<template>
    <template v-if="articleMoreInfo">
        <div class="mb-4 flex gap-4 justify-between items-center">
            <div class="text-[18px] gap-4 font-bold xl:text-[22px]">{{ articleMoreInfo.title }}</div>
            <button 
                type="button" 
                class="app-button app-button--light py-0 px-3"
                v-article-back
            >
                <div class="block w-14 h-8 svg-icon">
                    <svg><use :xlink:href="`${routerPath}svg-sprite.svg#arrow-left`"></use></svg>
                </div>
            </button>
        </div>
        <div class="mb-5">
            <img :src="articleMoreInfo.img" alt="">
        </div>
        <div class="text-[14px] leading-[1.4]">
            {{ articleMoreInfo.text }}
        </div>
    </template>
    <template v-else>
        <slot name="default"></slot>
    </template>
</template>

<script setup lang="ts">
import { articleMoreInfo } from '@/composables/useBlogArticle'
import { routerPath } from '@/routes'
</script>