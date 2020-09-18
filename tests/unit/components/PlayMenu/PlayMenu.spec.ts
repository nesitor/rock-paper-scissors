import { shallowMount } from '@vue/test-utils';

import PlayMenu from "@/components/PlayMenu/PlayMenu.vue";

describe('PlayMenu.vue', () => {
  it('creates well', async () => {
    const wrapper = shallowMount(PlayMenu, {
    });
    expect(wrapper).toBeTruthy();
    expect(wrapper.findAll('PlayMenuItem-stub').length).toBe(2);
  });
});
