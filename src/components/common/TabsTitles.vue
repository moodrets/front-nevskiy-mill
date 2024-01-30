<template>
    <div>
        <button 
            v-for="tab in items" 
            type="button" 
            class="app-button"
            :class="[tabsStore[name] && tabsStore[name].activeKey === tab.key ? 'app-button--dark' : 'app-button--light']"
            :data-tab-key="tab.key"
            @click="setActiveTab(name, tab.key)"
        >{{ tab.label }}</button>
    </div>
</template>

<script lang="ts" setup>
import { ITabItem, tabsStore, pushTabsToStore, setActiveTab } from '@/composables/useTabs';

const { name, items, activeKey } = defineProps<{
    name: string,
    items: ITabItem[],
    activeKey?: string
}>()

pushTabsToStore(name, activeKey ?? items[0].key, items)
</script>