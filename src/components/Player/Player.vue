<template>
  <div>
    Option Selected: {{ selected.name }}
  </div>
</template>

<script lang="ts">
import {
  Component, Emit, Prop, Vue,
} from 'vue-property-decorator';
import { Paper } from '@/models/paper';
import { Rock } from '@/models/rock';
import { Scissors } from '@/models/scissors';
import { Throw } from '@/models/throw';

@Component
export default class Player extends Vue {
  @Prop() private type!: string;

  public selected: Throw | null = null;

  public options = [
    new Rock(),
    new Paper(),
    new Scissors(),
  ];

  @Emit()
  selectedOption(): Throw | null {
    console.log('option selected!');
    return this.selected;
  }

  static getRandomOption(): number {
    return Math.floor(Math.random() * 3);
  }
}
</script>

<style scoped lang="scss">
</style>
