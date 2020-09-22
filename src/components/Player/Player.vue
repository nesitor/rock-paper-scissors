<template>
  <div>
    Option Selected: {{ selected.name }}
  </div>
</template>

<script lang="ts">
import {  Component, Emit, Vue } from 'vue-property-decorator';
import { Paper } from '@/models/paper';
import { Rock } from '@/models/rock';
import { Scissors } from '@/models/scissors';
import { Throw } from '@/models/throw';
import { Lizard } from "@/models/lizard";
import { Spock } from "@/models/spock";

@Component
export default class Player extends Vue {
  public selected: Throw | null = null;

  public options = [
    new Rock(),
    new Paper(),
    new Scissors(),
    new Lizard(),
    new Spock(),
  ];

  @Emit()
  selectedOption(): Throw | null {
    return this.selected;
  }

  static getRandomOption(): number {
    return Math.floor(Math.random() * 3);
  }
}
</script>

<style scoped lang="scss">
</style>
