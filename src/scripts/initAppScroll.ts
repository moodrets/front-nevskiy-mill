import { setActiveItemNavigation } from '@/composables/useAppBlocks'
import { threeAxisY } from '@/scripts/threeScene'

export function initBlocksIntersectionObserver() {
    const blocks = document.querySelectorAll('[data-hash]')
    let isTablet: boolean = false

    const blockObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isTablet = window.matchMedia('(max-width: 768px)').matches
                    let target = entry.target as HTMLElement
                    let blockHash = target.dataset.hash
                    blockHash && setActiveItemNavigation(blockHash)
                }
            })
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: isTablet ? 0.3 : 0.6,
        }
    )

    blocks.forEach((block) => blockObserver.observe(block))
}

export function initThreeObjectsScroll() {
    let stickyElement = document.querySelector('.js-sticky-element') as HTMLElement
    let stickyContainer = document.querySelector('.js-sticky-wrapper') as HTMLElement
    let stickyStop = document.querySelector('.js-sticky-stop') as HTMLElement
    let lastKnownScrollPosition = 0
    let deltaY = 0
    let pageFirstLoad = true

    function checkScroll() {
        if (!stickyStop || !stickyContainer || !stickyElement) {
            return
        }

        let isMobile = window.matchMedia('(max-width: 480px)').matches
        let stickyContainerRect = stickyContainer.getBoundingClientRect()
        let stickyStopRect = stickyStop.getBoundingClientRect()
        let stickyRect = stickyElement.getBoundingClientRect()
        let stickyElementTop = window.scrollY + stickyRect.top
        let stickyStopTop = stickyStop.offsetTop - stickyStopRect.height / (isMobile ? 1 : 2)

        if (window.scrollY <= stickyStopTop) {
            pageFirstLoad = false

            !stickyElement.classList.contains('is-fixed') && stickyElement.classList.add('is-fixed')
            stickyElement.removeAttribute('style')

            // @ts-ignore
            mainThreeObject?.model?.rotateOnAxis(threeAxisY, -deltaY * 0.00015)
            // @ts-ignore
            secondaryThreeObject?.model?.rotateOnAxis(threeAxisY, deltaY * 0.00015)
            return
        }

        if (window.scrollY >= stickyStopTop) {
            let topValue = pageFirstLoad
                ? stickyStop.offsetTop - stickyRect.height / 4 + 80
                : stickyElementTop
            stickyElement.classList.remove('is-fixed')
            stickyElement.style.cssText = `top: ${topValue}px;`
            return
        }
    }

    function onScrollHandler() {
        let ticking = false

        if (!ticking) {
            requestAnimationFrame(() => {
                deltaY = window.scrollY - lastKnownScrollPosition
                lastKnownScrollPosition = window.scrollY

                checkScroll()

                ticking = false
            })

            ticking = true
        }
    }

    window.addEventListener('scroll', onScrollHandler)
}
