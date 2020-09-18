<template>
  <div>
    <div v-if="result">
      <span v-if="result === 'Tie'">It's a Tie!</span>
      <span v-if="result !== 'Tie'">And the winner is.... {{ result }} PLAYER</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Throw } from '@/models/throw';

@Component
export default class Result extends Vue {
  @Prop({ required: true }) private playerOne!: Throw;
  @Prop({ required: true }) private playerTwo!: Throw;

  result: 'Tie' | 'First' | 'Second' = null;

  created() {
    this.result = 'Tie';
    if (this.playerTwo.isDefeatedBy(this.playerOne)) {
      this.result = 'First';
    }
    if (this.playerOne.isDefeatedBy(this.playerTwo)) {
      this.result = 'Second';
    }
  }
}
</script>

<style scoped lang="scss">
  .throwing-icon {
    color: coral;
  }
</style>
