<template>
  <div>
    <h4>You selected: </h4>
    <Throwing v-if="selected" :throwing="selected"></Throwing>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import Player from '@/components/Player/Player.vue';
import { Rock } from '@/models/rock';
import Throwing from '@/components/Player/Throwing.vue';

@Component({
  components: { Throwing }
})
export default class HumanPlayer extends Player {
  mounted() {
    this.selected = new Rock();
    this.$emit('selected-option', this.selected);
  }

  selectOption() {
    this.$emit('selected-option', this.selected);
  }
}
</script>

<style scoped lang="scss">
</style>
