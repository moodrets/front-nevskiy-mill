<template>
    <form @submit.prevent="onSubmit">
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
</template>

<script setup lang="ts">
import { routerPath } from '@/routes';

async function onSubmit() {

}
</script>