import { ref } from 'vue'

export interface ITabItem {
    label: string
    key: string
}

export interface ITab {
    activeKey: string,
    items: ITabItem[]
}

export const tabsStore = ref<Record<string, ITab>>({})

export const pushTabsToStore = (name: string, activeKey: string, items: ITabItem[]) => {
    tabsStore.value[name] = {
        activeKey,
        items
    }
}

export const setActiveTab = (name: string, activeKey: string) => {
    tabsStore.value[name].activeKey = activeKey
}