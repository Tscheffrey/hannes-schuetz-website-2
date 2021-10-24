<template>
  <div
    class="flex flex-col items-stretch w-full min-h-screen  border-l-3 border-r-3"
  >
    <!-- Mobile Logo -->
    <NuxtLink
      to="/"
      class="sticky top-0 z-40 block p-8 overflow-hidden  border-b-3 sm:hidden border-t-3 bg-secondary-100"
    >
      <div class="flex mb-4 logo-wrapper-mobile animate-logoScrollMobile1">
        <div class="flex-shrink-0 w-1/2 pr-12">
          <HannesLogo class="w-full" />
        </div>
        <div class="flex-shrink-0 w-1/2 pr-12">
          <HannesLogo class="w-full" />
        </div>
      </div>

      <div class="flex logo-wrapper-mobile animate-logoScrollMobile2">
        <div class="flex-shrink-0 w-1/2 pr-12">
          <SchuetzLogo class="w-full" />
        </div>
        <div class="flex-shrink-0 w-1/2 pr-12">
          <SchuetzLogo class="w-full" />
        </div>
      </div>
    </NuxtLink>

    <!-- Desktop Border top -->
    <div class="sticky top-0 hidden sm:block border-t-3"></div>

    <!-- Desktop Logo -->
    <NuxtLink
      :to="localePath('/')"
      class="fixed top-0 left-0 z-40 justify-center flex-shrink-0 hidden h-full overflow-hidden  w-14 sm:block border-r-3 lg:w-18"
    >
      <DesktopLogo
        class="
          absolute
          top-0
          w-10
          lg:w-14
          left-[7px]
          lg:left-[8px]
          animate-logoScroll
        "
      />
    </NuxtLink>

    <!-- Content -->
    <div class="flex-grow overflow-hidden sm:pl-[53px] lg:pl-[69px]">
      <Nuxt />
    </div>

    <!-- Footer -->
    <div
      class="box-content sticky bottom-0 z-40 flex flex-shrink-0 h-12  border-t-3 bg-secondary-100 border-b-3"
    >
      <button
        class="box-content relative flex-shrink-0 w-12 overflow-hidden  border-r-3 sm:border-r-0 sm:border-l-3 sm:order-2"
        @click="toggleDarkMode"
      >
        <div
          class="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-transform duration-300  dark:translate-x-12 dark:-translate-y-12 dark:rotate-180"
        >
          <SunIcon />
        </div>
        <div
          class="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-transform duration-300 -rotate-180 -translate-x-12 translate-y-12  dark:translate-x-0 dark:translate-y-0 dark:rotate-0"
        >
          <MoonIcon />
        </div>
      </button>
      <ul
        class="flex flex-wrap items-center w-full h-full px-8 font-medium uppercase  sm:order-1 sm:px-3 lg:px-4"
      >
        <li class="mr-6">
          <NuxtLink :to="localePath('/imprint')">
            {{ $t('base.imprint') }}
          </NuxtLink>
        </li>
        <li class="mr-6">
          <NuxtLink :to="localePath('/about')">{{ $t('base.about') }}</NuxtLink>
        </li>
        <div class="flex-grow"></div>
        <li class="justify-self-end">
          <NuxtLink
            class="uppercase"
            :to="switchLocalePath($i18n.locale === 'de' ? 'en' : 'de')"
            >{{ $i18n.locale === 'de' ? 'en' : 'de' }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { SunIcon, MoonIcon } from 'vue-feather-icons'
import HannesLogo from '~/assets/img/logo_hannes.svg?inline'
import SchuetzLogo from '~/assets/img/logo_schuetz.svg?inline'
import DesktopLogo from '~/assets/img/logo_vertical.svg?inline'

export default {
  components: { SunIcon, HannesLogo, SchuetzLogo, DesktopLogo, MoonIcon },
  head() {
    return {
      bodyAttrs: {
        class: ['dark', 'font-sans'],
      },
    }
  },
  methods: {
    toggleDarkMode() {
      document.body.classList.toggle('dark')
    },
  },
}
</script>

<style lang="postcss" scoped>
.logo-wrapper-mobile {
  width: calc(200% + 96px);
}
</style>
