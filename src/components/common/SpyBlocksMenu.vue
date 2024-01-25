<template>
    <ul>
        <li v-for="(block, blockIndex) in blocksList" :key="blockIndex">
            <a 
                @click.prevent="scrollToBlock(block.hash)"
                :class="{'is-active-block': block.intoView}"
                href="#"
            >{{ block.title }}</a>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { blocksList, scrollToBlock } from '@/composables/useAppBlocks';
</script>