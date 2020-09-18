<template>
  <div>
    <h3>Please select mode:</h3>
    <ul class="play-menu">
      <PlayMenuItem type="pc"></PlayMenuItem>
      <PlayMenuItem type="cc"></PlayMenuItem>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PlayMenuItem from '@/components/PlayMenu/PlayMenuItem.vue';

@Component({
  components: { PlayMenuItem },
})
export default class PlayMenu extends Vue {
}
</script>

<style scoped lang="scss">
  h3{
    margin-bottom: 25px;
    font-size: 18px;
    font-weight: bold;
  }
  ul.play-menu{
    padding: 0px;
    list-style: none;
    text-align: center;
  }
</style>
