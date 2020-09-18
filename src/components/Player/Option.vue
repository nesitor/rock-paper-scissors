<template>
  <li class="option" @click="select(throwing)">
    <Throwing :throwing="throwing"></Throwing>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Throw } from '@/models/throw';
import Throwing from "@/components/Player/Throwing.vue";
@Component({
  components: {Throwing}
})
export default class Option extends Vue {
  @Prop() private throwing!: Throw;

  select(throwing: Throw) {
    this.$emit('click', throwing);
  }
}
</script>

<style scoped lang="scss">
  .option {
    padding: 25px;
    border: 1px solid lightseagreen;
    margin-bottom: 15px;
    display: block;
  }
</style>
