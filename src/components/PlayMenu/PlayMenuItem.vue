<template>
  <li @click="onClick(type)">{{ title }}</li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PlayMenuItem extends Vue {
  @Prop() private type!: string;

  get title() {
    const type = this.options.find((option) => option.slug === this.type);
    if (!type) {
      return '';
    }
    return type.name;
  }

  options = [
    { slug: 'pc', name: 'Player vs Computer' },
    { slug: 'cc', name: 'Computer vs Computer' },
  ];

  onClick(type: string): void {
    this.$router.push({ name: 'play', params: { type } });
  }
}
</script>

<style scoped lang="scss">
  li {
    display: block;
    padding: 50px;
    font-size: 24px;
    font-weight: bold;
    color: lightseagreen;
    border: 1px solid lightseagreen;
    width: 50%;
    margin: 0 auto;
  }
  li:first-child {
    margin-bottom: 20px;
  }
</style>
