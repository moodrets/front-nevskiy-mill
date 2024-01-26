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

class BlockScroller {
    protected prevBlockQueueIndex: number = -1

    protected makeScrollToBlock(elem: Element | HTMLElement | null | undefined, headerHeight: number = 0) {
        elem?.scrollIntoView({
            behavior: "smooth", 
            block: "start", 
        })
    }

    public scrollToBlock(blockhash: string) {
        const appHeader = document.querySelector('.js-app-header')
        const appBlocks = document.querySelectorAll(`[data-hash="${blockhash}"]`)
        let appHeaderHeight = appHeader?.getBoundingClientRect().height ?? 140

        if (appBlocks.length > 1) {
            if (!appBlocks[this.prevBlockQueueIndex + 1]) {
                this.prevBlockQueueIndex = -1
            }

            this.prevBlockQueueIndex += 1

            if (appBlocks[this.prevBlockQueueIndex]) {
                this.makeScrollToBlock(appBlocks[this.prevBlockQueueIndex])
            }
        }

        if (appBlocks.length === 1) {
            this.prevBlockQueueIndex = -1
            this.makeScrollToBlock(appBlocks[0])
        }

        if (offcanvasVisible.value) {
            toggleOffcanvas()
        }

        if (appBlocks.length) {
            window.location.hash = blockhash
        }
    }
}

export const blockScroller = new BlockScroller()