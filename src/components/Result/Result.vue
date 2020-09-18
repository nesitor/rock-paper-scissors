<template>
  <div>
    <div v-if="result" class="result">
      <p v-if="result === 'Tie'" class="highlight">It's a Tie!</p>
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
import ThrowResult from "@/models/result";

@Component
export default class Result extends Vue {
  @Prop({ required: true }) private playerOne!: Throw;
  @Prop({ required: true }) private playerTwo!: Throw;

  result = 'Tie';

  mounted() {
    this.result = ThrowResult.whoWins(this.playerOne, this.playerTwo);
  }
}
</script>

<style scoped lang="scss">
  .result {
    padding-top: 25px;
    font-size: 24px;
    .highlight {
      font-weight: bold;
    }
  }
</style>
