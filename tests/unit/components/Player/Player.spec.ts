import { shallowMount } from '@vue/test-utils';
import Player from "@/components/Player/Player.vue";
import {Rock} from "@/models/rock";

describe('Player.vue', () => {
  it('renders text when passed selected option', () => {
    const selected = new Rock();
    const text = 'Option Selected: Rock';
    const wrapper = shallowMount(Player, {
      data() { return { selected: selected } },
    });
    expect(wrapper.text()).toMatch(text);
  });
});
