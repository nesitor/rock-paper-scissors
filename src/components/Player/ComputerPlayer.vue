<template>
  <div>
    <span v-if="selected">Computer Option Selected: {{ selected.name }}</span>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import Player from '@/components/Player/Player.vue';

@Component
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
