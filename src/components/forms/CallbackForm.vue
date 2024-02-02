<template>
    <div v-if="form.submitted" class="my-auto py-10 text-center">
        <div class="font-bold text-[24px]">Ваша заявка принята, <br>мы свяжемся с Вами в ближайшее время!</div>
        <button
            type="button"
            class="app-button app-button--light py-0 px-3 mt-6"
            @click.prevent="form.submitted = false"
        >
            <div class="block w-14 h-8 svg-icon">
                <svg><use :xlink:href="`${routerPath}svg-sprite.svg#arrow-left`"></use></svg>
            </div>
        </button>
    </div>
    <div v-else class="relative">
        <div v-if="form.loading" class="absolute z-[5] left-1/2 top-1/2 -translate-x-1/2">
            <div class="svg-icon w-12 h-12 animate-spin">
                <svg><use :xlink:href="`${routerPath}svg-sprite.svg#spinner`"></use></svg>
            </div>
        </div>
        <form
            @submit.prevent="onSubmit"
            class="relative"
            :class="{'opacity-30': form.loading}"
        >
            <div class="mb-3">
                <input type="text" class="app-form-control" placeholder="Ваше имя">
            </div>
            <div class="mb-3">
                <input type="tel" class="app-form-control" placeholder="Ваш номер телефона">
            </div>
            <div class="mb-3">
                <input type="email" class="app-form-control" placeholder="Ваш e-mail">
            </div>
            <div class="mb-3">
                <textarea class="app-form-control resize-none" rows="6" placeholder="Сообщение"></textarea>
            </div>
            <div class="flex flex-col gap-4 md:flex-row md:items-center">
                <label class="flex items-center gap-4 text-[15px] leading-[1.0]">
                    <div class="app-checkmark w-[42px] h-[42px]">
                        <input type="checkbox" name="agreement">
                        <div class="svg-icon rounded-full">
                            <svg><use :xlink:href="`${routerPath}svg-sprite.svg#checkmark`"></use></svg>
                        </div>
                    </div>
                    <div>Я согласен на обработку моих персональных данных</div>
                </label>
                <button type="submit" class="app-button py-2.5 app-button--dark md:ml-auto">Отправить сообщение</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { routerPath } from '@/routes'

const form = reactive({
    submitted: false,
    loading: false,
    error: false, 
    fields: {
        name: '',
        phone: '',
        email: '',
        comment: ''
    }
})

// for test
async function delay(ms: number) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('')
        }, ms)
    })
}

async function onSubmit() {
    form.loading = true

    try {

        await delay(2000)
        form.submitted = true
        form.fields.name = '',
        form.fields.phone = '',
        form.fields.email = '',
        form.fields.comment = ''

    } catch(error) {

    } finally {
        form.loading = false
    }
}
</script>