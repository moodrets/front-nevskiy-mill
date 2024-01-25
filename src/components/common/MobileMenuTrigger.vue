<template>
    <div class="mobile-menu-trigger" @click="toggleOffcanvas">
        <div v-if="offcanvasVisible" class="block svg-icon w-11 h-11">
            <svg><use :xlink:href="`${routerPath}svg-sprite.svg#close`"></use></svg>
        </div>
        <div v-else class="block svg-icon w-11 h-11 svg-icon--stroke">
            <svg><use :xlink:href="`${routerPath}svg-sprite.svg#menu`"></use></svg>
        </div>
    </div>
</template>

<script setup lang="ts">
import { offcanvasVisible, toggleOffcanvas } from '@/composables/useOffcanvas';
import { routerPath } from '@/routes';
</script>