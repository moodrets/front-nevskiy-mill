// styles
import 'swiper/css'
import '@/styles/main.scss'

// scripts
import { initBlocksIntersectionObserver } from '@/scripts/initAppScroll'
import { initProductsSlider } from '@/scripts/initSliders'

// vue imports
import { createApp } from 'vue'

// directives
import ArticleMoreDirective from '@/directives/articleMore'
import ArticleBackDirective from '@/directives/articleBack'
import ModalDirective from '@/directives/modal'

// components
import App from '@/App.vue'
import CallbackForm from '@/components/forms/CallbackForm.vue'
import SpyBlocksMenu from '@/components/common/SpyBlocksMenu.vue'
import MobileMenuTrigger from '@/components/common/MobileMenuTrigger.vue'
import Offcanvas from '@/components/common/Offcanvas.vue'
import Modal from '@/components/common/Modal.vue'
import TabsTitles from '@/components/common/TabsTitles.vue'
import TabsBodies from '@/components/common/TabsBodies.vue'
import TabsView from '@/components/common/TabsView.vue'
import ThreeObjects from '@/components/common/ThreeObjects.vue'

createApp(App)
    .directive('article-back', ArticleBackDirective)
    .directive('article-more', ArticleMoreDirective)
    .directive('modal', ModalDirective)
    .component('Modal', Modal)
    .component('ThreeObjects', ThreeObjects)
    .component('TabsTitles', TabsTitles)
    .component('TabsBodies', TabsBodies)
    .component('TabsView', TabsView)
    .component('Offcanvas', Offcanvas)
    .component('MobileMenuTrigger', MobileMenuTrigger)
    .component('SpyBlocksMenu', SpyBlocksMenu)
    .component('CallbackForm', CallbackForm)
    .mount('#app')

document.addEventListener('DOMContentLoaded', () => {
    initBlocksIntersectionObserver()
    initProductsSlider()
})