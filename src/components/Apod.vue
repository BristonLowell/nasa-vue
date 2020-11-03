<template>
  <div class="col-6 text-left">
    <h1 class="display-2">
      <img alt="Vue logo" src="../assets/logo.png">
      <b>iew</b> NASA here
    </h1>
  </div>
  <div class="apod col-2 mt-5">
    <form @submit.prevent="getApod()" id="billy-form">
      <label for="apod"></label>
      <input type="text" class="form-control" name="apod" placeholder="Date: DD-MM-YYYY" v-model="state.date">
      <button class="btn btn-primary btn-block" type="submit">
        View Picture
      </button>
    </form>
  </div>
  <div class="col-2"></div>
  <div class="col-12 d-flex" v-if="state.date">
    <div class="row my-5">
      <div class="col-7">
        <img :src="apod.url" class="img-fluid" alt="">
      </div>
      <div class="col-2 text-left">
        <p>{{ apod.explanation }}</p>
      </div>
    </div>
  </div>
  <div class="col-12 d-flex justify-content-center" v-else>
    <div class="row my-5">
      <div class="col-6">
        <img src="https://i.pinimg.com/originals/53/04/c5/5304c56282c143abc861cefc10daa4f7.jpg" class="img-fluid" alt="">
      </div>
      <div class="col-5 text-center">
        <p id="billy" class="">
          This is Billy. Billy slays.
        </p>
        <h1 class="p-1">
          Health: {{ state.health }}
        </h1>
        <button id="billy-button" @click="slapBilly()" class="btn btn-danger">
          Slap Billy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { apodService } from '../services/ApodService'
export default {
  name: 'Apod',
  setup() {
    const state = reactive({
      date: '',
      health: 100
    })
    return {
      state,
      slapBilly() {
        state.health--
        if (state.health <= 0) {
          state.health = 0
          alert('Wow you really killed Billy...')
        }
        if (state.health <= 90 && state.health > 70) {
          document.getElementById('billy').innerText = "You're making me angry!"
          document.getElementById('billy').classList.add('text-danger')
        }
        if (state.health <= 70 && state.health > 50) {
          document.getElementById('billy').innerText = "I'll disable your functions!"
          document.getElementById('billy').classList.add('text-danger')
        }
        if (state.health <= 50 && state.health > 40) {
          document.getElementById('billy').innerText = 'I tried to warn you'
          document.getElementById('billy-form').classList.add('d-none')
        }
        if (state.health <= 40 && state.health > 37) {
          document.getElementById('billy').innerText = 'Good luck hitting me now'
        }
        if (state.health <= 37 && state.health > 15) {
          document.getElementById('billy').innerText = 'HAHAHAHAHAHAHAHA!!!'
          document.getElementById('billy-button').classList.add('bg-white')
          document.getElementById('billy-button').classList.add('border-white')
        }
        if (state.health <= 15) {
          document.getElementById('billy').innerText = 'please no :('
          document.getElementById('billy-form').classList.remove('d-none')
        }
      },
      apod: computed(() => AppState.apod),
      getApod() {
        const date = state.date.split('-')
        const currentDate = date[2] + '-' + date[1] + '-' + date[0]
        // const date = state.date[6] + state.date[7] + state.date[8] + state.date[9] + state.date[5] + state.date[3] + state.date[4] + state.date[2] + state.date[0] + state.date[1]
        apodService.getApod(currentDate)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
