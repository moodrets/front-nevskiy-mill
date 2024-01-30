import { articleMoreInfo } from "@/composables/useBlogArticle"

function clickHandler(binding: Record<string, any>, event: Event) {
    event.preventDefault()
    articleMoreInfo.value = null
}

export default {
    mounted(el: HTMLElement, binding: any) {
        el.addEventListener('click', clickHandler.bind(undefined, binding))
    },
    unmounted(el: HTMLElement, binding: any) {
        el.removeEventListener('click', clickHandler.bind(undefined, binding))
    }
}