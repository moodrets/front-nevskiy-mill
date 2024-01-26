// styles
import 'swiper/css'
import '@/styles/main.scss'

// scripts
import { initBlocksIntersectionObserver } from '@/scripts/initAppScroll';

// vue imports
import { createApp } from 'vue'

// components
import App from '@/App.vue'
import CallbackForm from '@/components/forms/CallbackForm.vue'
import SpyBlocksMenu from '@/components/common/SpyBlocksMenu.vue'
import MobileMenuTrigger from '@/components/common/MobileMenuTrigger.vue'
import Offcanvas from '@/components/common/Offcanvas.vue'

createApp(App)
    .component('Offcanvas', Offcanvas)
    .component('MobileMenuTrigger', MobileMenuTrigger)
    .component('CallbackForm', CallbackForm)
    .component('SpyBlocksMenu', SpyBlocksMenu)
    .mount('#app')

document.addEventListener('DOMContentLoaded', () => {
    initBlocksIntersectionObserver()
})