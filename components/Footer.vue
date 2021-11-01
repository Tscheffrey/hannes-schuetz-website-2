<template>
  <div
    class="
      box-content
      sticky
      bottom-0
      z-40
      flex flex-shrink-0
      h-12
      border-t-3
      bg-secondary-100
      border-b-3
    "
  >
    <button
      class="
        box-content
        relative
        flex-shrink-0
        w-12
        overflow-hidden
        border-r-3
        sm:border-r-0 sm:border-l-3 sm:order-2
      "
      @click="toggleDarkMode"
    >
      <div
        class="
          absolute
          top-0
          left-0
          flex
          items-center
          justify-center
          w-full
          h-full
          transition-transform
          duration-300
          dark:translate-x-12 dark:-translate-y-12 dark:rotate-180
        "
      >
        <SunIcon />
      </div>
      <div
        class="
          absolute
          top-0
          left-0
          flex
          items-center
          justify-center
          w-full
          h-full
          transition-transform
          duration-300
          -rotate-180
          -translate-x-12
          translate-y-12
          dark:translate-x-0 dark:translate-y-0 dark:rotate-0
        "
      >
        <MoonIcon />
      </div>
    </button>
    <ul
      class="
        flex flex-wrap
        items-center
        w-full
        h-full
        px-8
        font-medium
        uppercase
        sm:order-1 sm:px-3
        lg:px-4
      "
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
</template>

<script>
import { SunIcon, MoonIcon } from 'vue-feather-icons'

export default {
  components: { SunIcon, MoonIcon },
  methods: {
    toggleDarkMode() {
      document.body.classList.toggle('dark')
    },
  },
}
</script>
