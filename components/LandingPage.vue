<template>
  <div>
    <div class="w-full p-8 uppercase border-b-3">
      <p class="mb-4 font-medium lg:text-2xl lg:mb-6">
        {{ $t('index.whatIDo') }}
      </p>
      <ul class="text-3xl font-bold sm:text-4xl lg:text-6xl leading-tighter">
        <li class="mb-3 lg:mb-5 last-of-type:mb-0">
          {{ $t('index.webDevelopment') }}
        </li>
        <li class="mb-3 lg:mb-5 last-of-type:mb-0">
          {{ $t('index.digitalPhotography') }}
        </li>
        <li class="mb-3 lg:mb-5 last-of-type:mb-0">
          {{ $t('index.analogPhotography') }}
        </li>
      </ul>
    </div>

    <div class="w-full p-8 uppercase border-b-3">
      <p class="mb-4 font-medium lg:text-2xl lg:mb-6">
        {{ $t('index.whereFrom') }}
      </p>
      <ul class="text-3xl font-bold sm:text-4xl lg:text-6xl leading-tighter">
        <li class="mb-3 lg:mb-5 last-of-type:mb-0">
          {{ $t('index.swGermany') }}
        </li>
      </ul>
    </div>

    <div class="w-full p-8 uppercase group">
      <p class="mb-4 font-medium lg:text-2xl lg:mb-6">
        {{ $t('index.whereMore') }}
      </p>
      <ul class="text-3xl font-bold sm:text-4xl lg:text-6xl leading-tighter">
        <li
          class="mb-3 transition-colors  duration-400 text-instagram lg:mb-5 last-of-type:mb-0"
        >
          <a href="https://www.instagram.com/jeffs.garbage/" target="_blank">
            Instagram
          </a>
        </li>

        <li
          class="mb-3 transition-colors  duration-400 text-unsplash lg:mb-5 last-of-type:mb-0"
        >
          <a href="https://www.linkedin.com/in/hannes-schuetz/" target="_blank">
            Unsplash
          </a>
        </li>

        <li
          class="mb-3 transition-colors  duration-400 text-twitter lg:mb-5 last-of-type:mb-0"
        >
          <a href="https://twitter.com/Tscheffrey" target="_blank"> Twitter </a>
        </li>

        <li
          class="mb-3 transition-colors  duration-400 text-github lg:mb-5 last-of-type:mb-0"
        >
          <a href="https://github.com/Tscheffrey" target="_blank"> GitHub </a>
        </li>

        <li
          class="mb-3 transition-colors  duration-400 text-bitspeicher lg:mb-5 last-of-type:mb-0"
        >
          <a href="https://bitspeicher.blog/author/hannes/" target="_blank">
            Bitspeicher Blog
          </a>
        </li>

        <li
          class="mb-3 transition-colors  duration-400 text-linkedin lg:mb-5 last-of-type:mb-0"
        >
          <a href="https://www.linkedin.com/in/hannes-schuetz/" target="_blank">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
