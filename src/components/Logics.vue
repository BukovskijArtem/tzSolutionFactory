<template>
  <div class="body">
      <h3>Доступные логические операторы</h3>
      <div v-for="item in logics" :key="item.id">
          <p>{{ item.title }}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Logics',
  data () {
    return {
    }
  },
  computed: {
      logics () {
          return this.$store.getters['logics/LOGICS']
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