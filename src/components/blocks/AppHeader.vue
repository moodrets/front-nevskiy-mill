<template>
    <header class="js-app-header app-header shadow-md bg-white fixed left-0 right-0 top-0 z-[50] py-5 lg:pt-10">
        <div class="centered flex items-center gap-4 justify-center lg:items-start lg:justify-between">
            <div class="app-logo app-logo--header">
                <a href="#about">
                    <img src="/img/logo.svg" alt="">
                </a>
            </div>
            <nav class="app-header__menu hidden lg:block">
                <SpyBlocksMenu class="spy-menu-desktop"></SpyBlocksMenu>
            </nav>
            <MobileMenuTrigger class="ml-auto lg:hidden" />
        </div>  
    </header>
</template>