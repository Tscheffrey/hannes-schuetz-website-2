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
    <!-- Theme switcher -->
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

    <!-- Language switcher -->
    <div
      class="
        box-content
        relative
        flex-shrink-0
        w-12
        overflow-hidden
        border-r-3
        sm:border-r-0 sm:border-l-3 sm:order-3
      "
    >
      <NuxtLink
        class="w-full h-full uppercase"
        :to="switchLocalePath($i18n.locale === 'de' ? 'en' : 'de')"
      >
        <transition name="language-switcher-1">
          <div
            v-if="$i18n.locale === 'en'"
            class="
              absolute
              top-0
              left-0
              flex
              items-center
              justify-center
              w-full
              h-full
            "
          >
            de
          </div>
        </transition>

        <transition name="language-switcher-2">
          <div
            v-if="$i18n.locale === 'de'"
            class="
              absolute
              top-0
              left-0
              flex
              items-center
              justify-center
              w-full
              h-full
            "
          >
            en
          </div>
        </transition>
      </NuxtLink>
    </div>

    <ul
      class="
        flex
        items-center
        w-full
        h-full
        px-8
        overflow-x-auto
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

<style lang="postcss">
.language-switcher-1-enter-active,
.language-switcher-1-leave-active {
  transition: transform 200ms ease;
}

.language-switcher-1-enter {
  @apply -translate-x-full;
}

.language-switcher-1-leave-active {
  @apply -translate-x-full;
}

.language-switcher-2-enter-active,
.language-switcher-2-leave-active {
  transition: transform 200ms ease;
}

.language-switcher-2-enter {
  @apply translate-x-full;
}

.language-switcher-2-leave-active {
  @apply translate-x-full;
}
</style>
