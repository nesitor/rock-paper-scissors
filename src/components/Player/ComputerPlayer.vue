<template>
  <div>
    <h4>Computer selected: </h4>
    <Throwing v-if="selected" :throwing="selected"></Throwing>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import Player from '@/components/Player/Player.vue';
import Throwing from '@/components/Player/Throwing.vue';

@Component({
  components: { Throwing }
})
export default class ComputerPlayer extends Player {
  mounted() {
    const random = Player.getRandomOption();
    this.selected = this.options[random];
    this.$emit('selected-option', this.selected);
  }
}
</script>

<style scoped lang="scss">
</style>
