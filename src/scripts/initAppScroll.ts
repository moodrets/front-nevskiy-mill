import { setActiveItemNavigation } from "@/composables/useAppBlocks";

export function initBlocksIntersectionObserver() {
    const blocks = document.querySelectorAll('[data-hash]')

    const blockObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const blockHash = (entry.target as HTMLHtmlElement).dataset?.hash
                blockHash && setActiveItemNavigation(blockHash)
            }
        });
    }, {
        root: null,
        rootMargin: "0px",
        threshold: .7,
    });

    blocks.forEach(block => {
        blockObserver.observe(block)
    })
}