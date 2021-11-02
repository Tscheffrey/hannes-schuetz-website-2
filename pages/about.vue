<template>
  <div class="p-8">
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, i18n }) {
    const article = await $content(`${i18n.locale}/about`).fetch()
    return {
      article,
    }
  },
  beforeMount() {
    setTimeout(async () => {
      this.$data.article = await this.$content(
        `${this.$i18n.locale}/about`
      ).fetch()
    }, 100)
  },
}
</script>
