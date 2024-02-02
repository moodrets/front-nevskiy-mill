import { onMounted, onBeforeUnmount, ref } from 'vue';

export const threeBlockVisible = ref<boolean>(false)

export function useToggleVisibleThreeBlock() {
    let aboutBlocks: NodeListOf<Element> | null = null;
    let aboutLastBlock: HTMLElement | null = null;

    function toggleVisibleBlock() {
        let blockTop = aboutLastBlock?.getBoundingClientRect().top

        if (!blockTop) {
            return
        }

        if (blockTop > 100) {
            if (threeBlockVisible.value !== true) {
                threeBlockVisible.value = true
            }
            return
        }

        if (threeBlockVisible.value !== false) {
            threeBlockVisible.value = false
        }
    }

    onMounted(() => {
        aboutBlocks = document.querySelectorAll('[data-hash="about"]')
        aboutLastBlock = aboutBlocks[aboutBlocks.length - 1] as HTMLElement
        window.addEventListener('scroll', toggleVisibleBlock)
        toggleVisibleBlock()
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', toggleVisibleBlock)
    })
}