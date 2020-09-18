<template>
  <div>
    Option Selected: {{ throwing.name }}
    <fa-icon :icon="['far', throwing.icon]" class="throwing-icon"></fa-icon>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Throw } from '@/models/throw';

@Component
export default class Throwing extends Vue {
  @Prop() private throwing!: Throw;
}
</script>

<style scoped lang="scss">
  .throwing-icon {
    color: coral;
  }
</style>
