import { ref } from 'vue'

export const offcanvasVisible = ref<boolean>(false)

export function toggleOffcanvas() {
    offcanvasVisible.value = !offcanvasVisible.value
    document.body.classList[offcanvasVisible.value ? 'add' : 'remove']('is-offcanvas-open')
}