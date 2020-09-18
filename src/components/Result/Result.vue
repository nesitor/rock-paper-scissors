<template>
  <div>
    <div v-if="result" class="result">
      <span v-if="result === 'Tie'">It's a Tie!</span>
      <p v-if="result !== 'Tie'">
        And the winner is....<br>
        <span class="highlight">
          The {{ result }} Player
        </span>
      </p>
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

  result: 'Tie' | 'First' | 'Second' | null = null;

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
  .result {
    font-size: 18px;
    .highlight {
      font-weight: bold;
    }
  }
</style>
