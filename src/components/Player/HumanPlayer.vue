<template>
  <div>
    <span v-if="selected">Human Option Selected: {{ selected.name }}</span>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import Player from '@/components/Player/Player.vue';
import { Rock } from '@/models/rock';

@Component
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
