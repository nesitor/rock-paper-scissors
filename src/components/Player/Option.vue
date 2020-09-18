<template>
  <div>
    <div class="option">
      <fa-icon :icon="['far', throwing.icon]" class="throwing-icon"></fa-icon> {{ throwing.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Throw } from '@/models/throw';

@Component
export default class Option extends Vue {
  @Prop() private throwing!: Throw;
}
</script>

<style scoped lang="scss">
  .option {
    padding: 25px;
    border: 1px solid lightseagreen;
    margin-bottom: 15px;
  }
  .throwing-icon {
    color: coral;
  }
</style>
