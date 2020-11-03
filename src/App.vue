<template>
  <div class="container-fluid text-white bg-dark">
    <div class="row justify-content-center text-center">
      <apod />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import Apod from './components/Apod'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appstate: computed(() => AppState)
    }
  },
  components: { Apod }
}
</script>

<style lang="scss" scoped>

</style>
