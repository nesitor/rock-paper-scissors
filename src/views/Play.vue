<template>
  <div class="play">
    <router-link to="/">Return to Home</router-link>

    <h1>This is an play page with type {{ type }}</h1>

    <HumanPlayer v-if="type === 'pc'" v-on:selected-option="getFirstThrow"></HumanPlayer>
    <ComputerPlayer v-if="type === 'cc'" v-on:selected-option="getFirstThrow"></ComputerPlayer>

    <ComputerPlayer v-on:selected-option="getSecondThrow"></ComputerPlayer>

    <Result v-if="haveResult" :player-one="firstThrow" :player-two="secondThrow"></Result>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ComputerPlayer from '@/components/Player/ComputerPlayer.vue';
import HumanPlayer from '@/components/Player/HumanPlayer.vue';
import {Throw} from "@/models/throw";
import Result from "@/components/Result/Result.vue";

@Component({
  components: {
    Result,
    HumanPlayer,
    ComputerPlayer,
  },
})
export default class Play extends Vue {
  type = this.$route.params.type;
  firstThrow: Throw | null = null;
  secondThrow: Throw | null = null;
  haveResult = false;

  getFirstThrow(throwing: Throw) {
    this.firstThrow = throwing;
    this.getResult();
  }

  getSecondThrow(throwing: Throw) {
    this.secondThrow = throwing;
    this.getResult();
  }

  getResult() {
    if (this.firstThrow !== null && this.secondThrow !== null) {
      this.haveResult = false;
    }
    this.haveResult = true;
  }
}
</script>

<style scoped lang="scss">

</style>
