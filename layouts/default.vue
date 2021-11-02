<template>
  <div
    class="flex flex-col items-stretch w-full min-h-screen tracking-wide border-l-3 border-r-3"
  >
    <!-- Mobile Logo -->
    <NuxtLink
      :to="localePath('/')"
      class="sticky top-0 z-40 block p-8 overflow-hidden border-b-3 sm:hidden border-t-3 bg-secondary-100"
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
      class="fixed top-0 left-0 z-40 justify-center flex-shrink-0 hidden h-full overflow-hidden w-14 sm:block border-r-3 lg:w-18"
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
    <Footer />
  </div>
</template>

<script>
import HannesLogo from '~/assets/img/logo_hannes.svg?inline'
import SchuetzLogo from '~/assets/img/logo_schuetz.svg?inline'
import DesktopLogo from '~/assets/img/logo_vertical.svg?inline'

import Footer from '@/components/Footer.vue'

export default {
  components: { HannesLogo, SchuetzLogo, DesktopLogo, Footer },
  head() {
    return {
      bodyAttrs: {
        class: ['dark', 'font-sans'],
      },
    }
  },
}
</script>

<style lang="postcss" scoped>
.logo-wrapper-mobile {
  width: calc(200% + 96px);
}
</style>
