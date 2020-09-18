<template>
  <div class="home">
    <h1>Rock Paper Scissors</h1>
    <PlayMenu/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PlayMenu from '@/components/PlayMenu/PlayMenu.vue';

@Component({
  components: {
    PlayMenu,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
  .home {
    padding-top: 5%;
    h1 {
      padding-bottom: 5%;
    }
  }
</style>
