<template>
    <div class="three-objects-wrapper" :class="{'is-visible': threeBlockVisible}">
        <div class="three-object three-object--main"></div>
        <div class="three-object three-object--secondary"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { threeBlockVisible, useToggleVisibleThreeBlock } from '@/composables/useThreeObjects';
import { routerPath } from '@/routes';
import { ThreeScene } from '@/scripts/threeScene';

useToggleVisibleThreeBlock()

onMounted(() => {
    const mainThreeObject: Record<any, any> = new ThreeScene({
        filePath: `${routerPath}models/tomato-basil.glb`,
        renderElem: document.querySelector('.three-object--main'),
        modelInitialRotation: {
            y: 0,
            x: .35,
            z: 0
        },
        modelInitialPosition: {
            y: -45,
            x: 0,
            z: 8
        },
        modelMoveAnimationSettings: {
            direction: 'right',
            axis: 'y',
            value: 0.0003,
            moreValue: [0.5, -0.5]
        }
    } as any);

    const secondaryThreeObject: Record<any, any> = new ThreeScene({
        filePath: `${routerPath}models/apple-carrot.glb`,
        renderElem: document.querySelector('.three-object--secondary'),
        modelInitialRotation: {
            y: 0,
            x: -.45,
            z: 0
        },
        modelInitialPosition: {
            y: -27,
            x: 0,
            z: 30
        },
        modelMoveAnimationSettings: {
            direction: 'left',
            axis: 'y',
            value: 0.0003,
            moreValue: [0.5, -0.5]
        }
    } as any);

    // @ts-ignore
    window.mainThreeObject = mainThreeObject;
    // @ts-ignore
    window.secondaryThreeObject = secondaryThreeObject;
})
</script>

<style lang="scss">
.three-objects-wrapper {
    @apply
        pointer-events-none
        overflow-hidden
        transition-all
        duration-200
        opacity-0
        h-[700px]
        fixed
        -z-[1]
        top-32
        left-0
        right-0
        lg:w-[820px]
        lg:top-[200px]
        lg:left-1/2
        lg:right-auto
        lg:-translate-x-[156px]
    ;

    &.is-visible {
        @apply 
            opacity-10
            lg:opacity-100
        ;
    }
}

.three-object {
    @apply 
        transition-all
        duration-500
        scale-[.8]
        absolute
    ;

    &--main {
        @apply 
            z-[5]
            w-[700px]
            h-[700px]
            top-0
            -left-[40%]
            md:left-0
        ;
    }

    &--secondary {
        @apply 
            z-[4]
            w-[420px]
            h-[420px]
            top-0
            -right-[20%]
            md:right-0
        ;
    }

    &.is-loaded {
        @apply 
            scale-100
            opacity-100
        ;
    }
}
</style>