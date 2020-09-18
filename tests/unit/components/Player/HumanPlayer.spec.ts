import { shallowMount } from '@vue/test-utils';
import {Rock} from "@/models/rock";
import HumanPlayer from "@/components/Player/HumanPlayer.vue";

describe('HumanPlayer.vue', () => {
  it('creates well', () => {
    const wrapper = shallowMount(HumanPlayer, {});
    expect(wrapper).toBeTruthy();
  });

  it('renders text with option', () => {
    const selected = new Rock();
    const text = 'You selected:';
    const wrapper = shallowMount(HumanPlayer, {
      data() { return { selected: selected } },
    });
    expect(wrapper.text()).toMatch(text);
  });

  it('emit selected option on emit', async () => {
    const selected = new Rock();
    const wrapper = shallowMount(HumanPlayer, {
      data() { return { selected: selected } },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('selected-option')).toBeFalsy();
    (wrapper.vm as any).optionSelected(selected)
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('selected-option')?.length).toBe(1);
    expect(wrapper.emitted('selected-option')?.shift()).toStrictEqual([selected]);
  });
});
