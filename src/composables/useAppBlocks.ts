import { ref } from 'vue'
import { offcanvasVisible, toggleOffcanvas } from '@/composables/useOffcanvas'

export const blocksList = ref<{
    title: string,
    hash: string,
    intoView: boolean,
}[]>([
    {
        title: 'О НАС',
        hash: 'about',
        intoView: false,
    },
    {
        title: 'ПРОДУКЦИЯ',
        hash: 'products',
        intoView: false,
    },
    {
        title: 'ПАРТНЕРЫ',
        hash: 'partners',
        intoView: false,
    },
    {
        title: 'БЛОГ',
        hash: 'blog',
        intoView: false,
    },
    {
        title: 'КОНТАКТЫ',
        hash: 'contacts',
        intoView: false,
    },
])

export function setActiveItemNavigation(blockHash: string) {
    blocksList.value.forEach(block => block.intoView = block.hash === blockHash)
}

export function scrollToBlock(blockhash: string) {
    const appBlock = document.querySelector(`[data-hash="${blockhash}"]`) as HTMLElement
    if (appBlock) {
        appBlock.scrollIntoView({
            behavior: "smooth", 
            block: "start", 
        })
        window.location.hash = blockhash
    }
    if (offcanvasVisible.value) {
        toggleOffcanvas()
    }
}