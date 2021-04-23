<template>
  <div class="body">
      <h3>Доступные условия</h3>
      <div v-for="item in conditions" :key="item.id">
          <p>{{ item.title }}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Conditions',
  data () {
    return {
    }
  },
  computed: {
      conditions () {
          return this.$store.getters['conditions/CONDITIONS']
      }
  }
}
</script>

<style lang="scss" scoped>
.body {
    h3 {
        display: flex;
        justify-content: center;
    }
    p {
        display: flex;
        justify-content: center;
    }
}
</style>