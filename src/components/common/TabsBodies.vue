<template>
    <template v-for="(tab, tabIndex) in tabsStore[name]?.items" :key="tabIndex">
        <Transition name="tabs">
            <div v-show="tab.key === tabsStore[name]?.activeKey" :data-tab-key="tab.key">
                <slot :name="tab.key"></slot>
            </div>
        </Transition>
    </template>
</template>

<script setup lang="ts">
import { tabsStore } from '@/composables/useTabs'

const { name } = defineProps<{
    name: string
}>()
</script>

<style lang="scss">
// enter
.tabs-enter-from {
    opacity: 0;
    transform: translateY(40px);
}
.tabs-enter-active {
    transition: all 0.4s;
}
.tabs-enter-to {
    transform: translateY(0);
    opacity: 1;
}
// leave
.tabs-leave-from {
}
.tabs-leave-active {
    display: none;
}
.tabs-leave-to {
}
</style>