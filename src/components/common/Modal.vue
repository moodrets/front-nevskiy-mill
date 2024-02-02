<template>
    <div
        v-cloak
        tabindex="0"
        class="app-modal"
        ref="appModalRef"
        :class="{'is-open': modalVisibleState[props.name]}"
        :style="{'--app-modal-width': `${props.width}px`}"
        @click="clickHandler"
        @keydown.esc="onClose"
    >
        <div class="app-modal__body">
            <div class="app-modal__close" @click="onClose">
                <div class="svg-icon lg:w-7 lg:h-7">
                    <svg><use :xlink:href="`${routerPath}svg-sprite.svg#close`"></use></svg>
                </div>
            </div>
            <slot
                :onClose="onClose"
                :isOpen="modalVisibleState[props.name]"
            ></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { modalVisibleState, modalClose } from '@/composables/useModal';
import { routerPath } from '@/routes';
import { onUpdated, ref } from 'vue'

const props = withDefaults(
    defineProps<{
        width?: number,
        name: string,
    }>(),
    {
        name: 'defaultModal',
        width: 480,
    }
)

modalVisibleState.value[props.name] = false

const appModalRef = ref<HTMLElement>()

function onClose() {
    modalClose(props.name)
}

function clickHandler(event: Event) {
    const target = event.target as HTMLElement
    
    if (target.classList.contains('app-modal') || !target.closest('.app-modal')) {
        modalClose(props.name)
    }
}

onUpdated(() => {
    if (modalVisibleState.value[props.name] === true) {
        appModalRef?.value?.focus()
    }
    if (modalVisibleState.value[props.name] === false) {
        appModalRef?.value?.blur()
    }
})
</script>

<style lang="scss">
.app-modal {
    @apply 
        flex
        fixed
        z-[200]
        left-0
        right-0
        top-0
        bottom-0
        bg-dark
        bg-opacity-50
        backdrop-blur-sm
        overflow-y-auto
        p-5
        opacity-0
        pointer-events-none
        transition-all
        duration-300
        lg:p-8
    ;

    &__close {
        @apply
            cursor-pointer
            absolute
            right-4
            top-4
            z-10
        ;

        .svg-icon {
            @apply block;
        }
    }

    &__body {
        @apply 
            relative
            m-auto
            max-w-full
            w-[--app-modal-width]
            rounded-[24px]
            bg-white
            p-10
            transition-all
            duration-300
            -translate-y-[40px]
        ;
    }

    &.is-open {
        @apply 
            opacity-100
            pointer-events-auto
        ;

        .app-modal__body {
            @apply 
                translate-y-0
            ;
        }
    }
}
</style>