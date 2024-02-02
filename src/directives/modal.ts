import { modalToggle } from "@/composables/useModal";

function clickHandler(binding: Record<string, any>, event: Event) {
    event.preventDefault()
    if (binding.value.name) {
        modalToggle(binding.value.name)
    }
}

export default {
    mounted(el: HTMLElement, binding: any) {
        el.addEventListener('click', clickHandler.bind(undefined, binding))
    },
    unmounted(el: HTMLElement, binding: any) {
        el.removeEventListener('click', clickHandler.bind(undefined, binding))
    }
}