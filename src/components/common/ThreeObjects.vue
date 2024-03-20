<template>
    <div class="three-objects-wrapper js-sticky-element">
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
import { onMounted } from 'vue'
import { routerPath } from '@/routes'
import { ThreeScene, createDirectionalLight } from '@/scripts/threeScene'

let mainThreeObject: Record<any, any> | null = null
let secondaryThreeObject: Record<any, any> | null = null

onMounted(() => {
    mainThreeObject = new ThreeScene({
        filePath: `${routerPath}models/tomato-basil.glb`,
        renderElem: document.querySelector('.three-object--main'),
        lights: [
            createDirectionalLight(0xffffff, 2.5, { x: -10, y: 100, z: 100 }),
            createDirectionalLight(0xffffff, 2.5, { x: 0, y: 100, z: 100 }),
            createDirectionalLight(0xffffff, 2.5, { x: 0, y: -80, z: 100 }),
        ],
        cameraPosition: {
            x: 0,
            y: 0,
            z: 180,
        },
        cameraPerspectiveSettings: {
            fov: 50,
            near: 1,
            far: 5000,
        },
        modelInitialRotation: {
            y: 0,
            x: 0.05,
            z: 0.3,
        },
        modelInitialPosition: {
            y: -60,
            x: 30,
            z: 0,
        },
        modelInitialScale: {
            x: 569,
            y: 569,
            z: 569,
        },
        modelMoveAnimationSettings: {
            direction: 'right',
            axis: 'y',
            value: 0.0001,
            moreValue: [0.3, -0.3],
        },
    } as any)

    secondaryThreeObject = new ThreeScene({
        filePath: `${routerPath}models/apple-carrot.glb`,
        renderElem: document.querySelector('.three-object--secondary'),
        lights: [
            createDirectionalLight(0xffffff, 1.7, { x: -10, y: 100, z: 40 }),
            createDirectionalLight(0xffffff, 1.7, { x: 0, y: 0, z: 40 }),
        ],
        cameraPosition: {
            x: 0,
            y: 0,
            z: 200,
        },
        modelInitialRotation: {
            y: 0,
            x: -0.2,
            z: -0.3,
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
            value: 0.0002,
            moreValue: [0.01, -0.3],
        },
    } as any)

    // @ts-ignore
    window.mainThreeObject = mainThreeObject
    // @ts-ignore
    window.secondaryThreeObject = secondaryThreeObject
})
</script>

<style lang="scss">
.three-objects-wrapper {
    @apply pointer-events-none
        overflow-hidden
        h-[700px]
        absolute
        -z-[1]
        top-32
        left-0
        right-0
        opacity-20
        transition-opacity
        lg:opacity-100
        lg:overflow-visible
        lg:w-[820px]
        lg:top-[200px]
        lg:left-1/2
        lg:right-auto
        lg:-translate-x-[310px]
        xl:-translate-x-[156px];

    &.is-fixed {
        @apply fixed;
    }

    &.is-bottom {
        @apply bottom-0 top-auto;
    }
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
