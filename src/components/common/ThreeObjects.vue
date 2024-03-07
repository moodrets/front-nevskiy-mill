<template>
    <div ref="wrapperRef" class="three-objects-wrapper">
        <div class="three-object three-object--main">
            <div class="spinner opacity-50 absolute z-[5] left-1/2 top-1/2 -translate-x-1/2">
                <div class="svg-icon w-14 h-14 animate-spin">
                    <svg><use :xlink:href="`${routerPath}svg-sprite.svg#spinner`"></use></svg>
                </div>
            </div>
        </div>
        <div class="three-object three-object--secondary">
            <div class="spinner opacity-50 absolute z-[5] left-1/2 top-1/2 -translate-x-1/2">
                <div class="svg-icon w-14 h-14 animate-spin">
                    <svg><use :xlink:href="`${routerPath}svg-sprite.svg#spinner`"></use></svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { routerPath } from '@/routes'
import { ThreeScene } from '@/scripts/threeScene'

const wrapperRef = ref<HTMLElement | null>()
let mainThreeObject: Record<any, any> | null = null
let secondaryThreeObject: Record<any, any> | null = null
let aboutBlocks: NodeListOf<Element> | null = null
let aboutLastBlock: HTMLElement | null = null
let lastKnownScrollPosition = 0
let deltaY = 0

// @ts-ignore
const threeAxisZ = new THREE.Vector3(0, 0, 1).normalize()
// @ts-ignore
const threeAxisY = new THREE.Vector3(0, 1, 0).normalize()

function onScrollHandler(event: Event) {
    let aboutBlockTop = aboutLastBlock?.getBoundingClientRect().top || 0
    let ticking = false
    let screenLG = window.matchMedia('(max-width: 1023px)').matches
    let offsetTop = screenLG ? 130 : 200
    let moreThan = screenLG ? -400 : 100

    if (!ticking) {
        window.requestAnimationFrame(function () {
            deltaY = window.scrollY - lastKnownScrollPosition
            lastKnownScrollPosition = window.scrollY

            if (window.scrollY > 0) {
                if (wrapperRef.value) {
                    if (aboutBlockTop > moreThan) {
                        wrapperRef.value.removeAttribute('style')
                    } else {
                        !wrapperRef.value.hasAttribute('style') &&
                            wrapperRef.value.setAttribute(
                                'style',
                                `position: absolute; top: ${window.scrollY + offsetTop}px`
                            )
                    }
                }

                mainThreeObject?.model.rotateOnAxis(threeAxisY, -deltaY * 0.0003)
                secondaryThreeObject?.model.rotateOnAxis(threeAxisY, deltaY * 0.00035)
            }

            ticking = false
        })
        ticking = true
    }
}

onMounted(() => {
    aboutBlocks = document.querySelectorAll('[data-hash="about"]')
    aboutLastBlock = aboutBlocks[aboutBlocks.length - 1] as HTMLElement

    mainThreeObject = new ThreeScene({
        filePath: `${routerPath}models/tomato-basil.glb`,
        renderElem: document.querySelector('.three-object--main'),
        cameraPosition: {
            x: 0,
            y: 0,
            z: 180,
        },
        modelInitialRotation: {
            y: 0,
            x: 0.05,
            z: 0.4,
        },
        modelInitialPosition: {
            y: -60,
            x: 30,
            z: 0,
        },
        modelInitialScale: {
            x: 570,
            y: 570,
            z: 570,
        },
        modelMoveAnimationSettings: {
            direction: 'right',
            axis: 'y',
            value: 0.0003,
            moreValue: [0.5, -0.5],
        },
    } as any)

    secondaryThreeObject = new ThreeScene({
        filePath: `${routerPath}models/apple-carrot.glb`,
        renderElem: document.querySelector('.three-object--secondary'),
        cameraPosition: {
            x: 0,
            y: 0,
            z: 200,
        },
        modelInitialRotation: {
            y: 0,
            x: -0.3,
            z: -0.5,
        },
        modelInitialPosition: {
            y: -70,
            x: -30,
            z: 0,
        },
        modelInitialScale: {
            x: 680,
            y: 680,
            z: 680,
        },
        modelMoveAnimationSettings: {
            direction: 'left',
            axis: 'y',
            value: 0.0003,
            moreValue: [0.5, -0.5],
        },
    } as any)

    // @ts-ignore
    window.mainThreeObject = mainThreeObject
    // @ts-ignore
    window.secondaryThreeObject = secondaryThreeObject

    window.addEventListener('scroll', onScrollHandler)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScrollHandler)
})
</script>

<style lang="scss">
.three-objects-wrapper {
    @apply pointer-events-none
        overflow-hidden
        h-[700px]
        fixed
        -z-[1]
        top-32
        left-0
        right-0
        opacity-20
        lg:opacity-100
        lg:overflow-visible
        lg:w-[820px]
        lg:top-[200px]
        lg:left-1/2
        lg:right-auto
        lg:-translate-x-[156px];
}

.three-object {
    @apply transition-all
        duration-700
        absolute;

    &--main {
        @apply z-[5]
            w-[700px]
            h-[700px]
            top-0
            -left-[40%]
            md:left-0
            -translate-y-[30%];

        &.is-loaded {
            @apply translate-y-0;

            .spinner {
                @apply opacity-0 
                    pointer-events-none;
            }
        }
    }

    &--secondary {
        @apply z-[4]
            w-[420px]
            h-[420px]
            top-0
            -right-[20%]
            translate-y-[30%]
            md:right-0;

        &.is-loaded {
            @apply translate-y-0;

            .spinner {
                @apply opacity-0 
                    pointer-events-none;
            }
        }
    }
}
</style>
