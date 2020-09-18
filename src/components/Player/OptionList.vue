<template>
  <div>
    <h3>Please select an option:</h3>
    <ul class="option-list">
      <Option v-for="(option, index) in options" :key="index" :throwing="option" @click="select(option)"></Option>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import { Throw } from '@/models/throw';
import Option from "@/components/Player/Option.vue";

@Component({
  components: {Option}
})
export default class OptionList extends Vue {
  @Prop() private options!: Array<Throw>;

  @Emit()
  optionSelected(option: Throw) {
    return option
  }

  select(throwing: Throw) {
    this.$emit('option-selected', throwing)
  }
}
</script>

<style scoped lang="scss">
  h3 {
    margin-bottom: 20px;
  }
  .option-list {
    width: 25%;
    padding: 0;
    list-style: none;
    text-align: center;
    margin: 0 auto;
  }
</style>
