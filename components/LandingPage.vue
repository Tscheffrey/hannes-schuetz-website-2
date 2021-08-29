<template>
  <div class="flex flex-col items-stretch h-screen overflow-hidden border-3">
    <!-- Mobile Logo -->
    <div class="flex-shrink-0 p-8 border-b-3 sm:hidden">
      <MobileLogo class="w-full" />
    </div>

    <div
      class="relative flex-grow flex-shrink h-full overflow-x-auto  sm:flex sm:overflow-x-hidden"
    >
      <!-- Desktop Logo -->
      <div
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
      </div>

      <!-- Content -->
      <div class="w-full h-full sm:overflow-x-auto">
        <div class="w-full p-8 uppercase border-b-3">
          <p class="mb-4 font-medium lg:text-2xl lg:mb-6">What do I do?</p>
          <ul
            class="text-3xl font-bold sm:text-4xl lg:text-6xl leading-tighter"
          >
            <li class="mb-3 lg:mb-5 last-of-type:mb-0">Web Development</li>
            <li class="mb-3 lg:mb-5 last-of-type:mb-0">Digital Photography</li>
            <li class="mb-3 lg:mb-5 last-of-type:mb-0">Analog Photography</li>
          </ul>
        </div>

        <div class="w-full p-8 uppercase border-b-3">
          <p class="mb-4 font-medium lg:text-2xl lg:mb-6">Where am I from?</p>
          <ul
            class="text-3xl font-bold sm:text-4xl lg:text-6xl leading-tighter"
          >
            <li class="mb-3 lg:mb-5 last-of-type:mb-0">SW Germany</li>
          </ul>
        </div>

        <div class="w-full p-8 uppercase group">
          <p class="mb-4 font-medium lg:text-2xl lg:mb-6">
            Where can you see more?
          </p>
          <ul
            class="text-3xl font-bold sm:text-4xl lg:text-6xl leading-tighter"
          >
            <li
              class="mb-3 transition-colors  text-instagram lg:mb-5 last-of-type:mb-0 lg:text-primary-100 lg:group-hover:text-instagram"
            >
              <a href="#">Instagram</a>
            </li>
            <li
              class="mb-3 transition-colors  text-twitter lg:mb-5 last-of-type:mb-0 lg:text-primary-100 lg:group-hover:text-twitter"
            >
              <a href="#">Twitter</a>
            </li>
            <li
              class="mb-3 transition-colors  text-github lg:mb-5 last-of-type:mb-0 lg:text-primary-100 lg:group-hover:text-github"
            >
              <a href="#">GitHub</a>
            </li>
            <li
              class="mb-3 transition-colors  text-bitspeicher lg:mb-5 last-of-type:mb-0 lg:text-primary-100 lg:group-hover:text-bitspeicher"
            >
              <a href="#">Bitspeicher Blog</a>
            </li>
            <li
              class="mb-3 transition-colors  text-linkedin lg:mb-5 last-of-type:mb-0 lg:text-primary-100 lg:group-hover:text-linkedin"
            >
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
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
          <a href="#">Imprint</a>
        </li>
        <li>
          <a href="#">Data Protection</a>
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

<style></style>
