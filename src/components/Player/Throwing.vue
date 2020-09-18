<template>
  <div>
    <span class="name">{{ throwing.name }}</span>
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
  .name{
    display: inline-block;
    font-size: 24px;
    padding: 13px 15px;
  }
  .throwing-icon {
    font-size: 50px;
    color: coral;
  }
</style>
