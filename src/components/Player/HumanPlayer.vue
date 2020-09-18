<template>
  <div>
    <div v-if="!selected" class="options">
      <OptionList @option-selected="optionSelected" :options="options"></OptionList>
    </div>
    <div v-if="selected" class="selected">
      <h4>You selected: </h4>
      <Throwing v-if="selected" :throwing="selected"></Throwing>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import Player from '@/components/Player/Player.vue';
import Throwing from '@/components/Player/Throwing.vue';
import OptionList from "@/components/Player/OptionList.vue";
import { Throw } from '@/models/throw';

@Component({
  components: {OptionList, Throwing }
})
export default class HumanPlayer extends Player {
  optionSelected(option: Throw) {
    this.selected = option;
    this.$emit('selected-option', this.selected);
  }
}
</script>

<style scoped lang="scss">
</style>
