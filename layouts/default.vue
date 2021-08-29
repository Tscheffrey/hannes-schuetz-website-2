<template>
  <div
    class="fixed top-0 left-0 flex flex-col items-stretch w-full overflow-hidden  h-viewportY border-3"
  >
    <!-- Mobile Logo -->
    <NuxtLink to="/" class="flex-shrink-0 p-8 border-b-3 sm:hidden">
      <MobileLogo class="w-full" />
    </NuxtLink>

    <div
      class="relative flex-grow flex-shrink h-full overflow-x-auto  sm:flex sm:overflow-x-hidden"
    >
      <!-- Desktop Logo -->
      <NuxtLink
        to="/"
        class="relative justify-center flex-shrink-0 hidden h-full overflow-hidden  lg:block w-14 sm:block border-r-3 lg:w-18"
      >
        <DesktopLogo
          class="
            absolute
            top-0
            bottom-0
            w-10
            lg:w-14
            left-[7px]
            lg:left-[8px]
            animate-logoScroll
          "
        />
      </NuxtLink>

      <!-- Content -->
      <div class="w-full h-full sm:overflow-x-auto">
        <Nuxt />
      </div>
    </div>

    <div class="box-content flex flex-shrink-0 h-12 border-t-3">
      <button
        class="box-content flex items-center justify-center flex-shrink-0 w-12  border-r-3 sm:border-r-0 sm:border-l-3 sm:order-2"
      >
        <SunIcon />
      </button>
      <ul
        class="flex flex-wrap items-center w-full h-full px-8 font-medium uppercase  sm:order-1 sm:px-3 lg:px-4"
      >
        <li class="mr-6">
          <NuxtLink to="/imprint">Imprint</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { SunIcon } from 'vue-feather-icons'
import MobileLogo from '~/assets/img/logo.svg?inline'
import DesktopLogo from '~/assets/img/logo_vertical.svg?inline'

export default {
  components: { SunIcon, MobileLogo, DesktopLogo },
}
</script>
