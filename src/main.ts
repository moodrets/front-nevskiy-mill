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
import TabsTitles from '@/components/common/TabsTitles.vue'
import TabsBodies from '@/components/common/TabsBodies.vue'

createApp(App)
    .component('TabsTitles', TabsTitles)
    .component('TabsBodies', TabsBodies)
    .component('Offcanvas', Offcanvas)
    .component('MobileMenuTrigger', MobileMenuTrigger)
    .component('SpyBlocksMenu', SpyBlocksMenu)
    .component('CallbackForm', CallbackForm)
    .mount('#app')

document.addEventListener('DOMContentLoaded', () => {
    initBlocksIntersectionObserver()
})