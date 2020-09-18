import { shallowMount } from '@vue/test-utils';
import {Rock} from "@/models/rock";
import ComputerPlayer from "@/components/Player/ComputerPlayer.vue";

describe('ComputerPlayer.vue', () => {
  it('renders text without option', () => {
    const text = 'Computer selected:';
    const wrapper = shallowMount(ComputerPlayer, {});
    expect(wrapper.text()).toMatch(text);
  });

  it('emit selected option on emit if is passed', async () => {
    const selected = new Rock();
    const wrapper = shallowMount(ComputerPlayer, {});
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('selected-option')).toBeTruthy();
    expect(wrapper.emitted('selected-option')?.length).toBe(1);
  });
});
