import { shallowMount } from '@vue/test-utils';

import Home from "@/views/Home.vue";

describe('Home.vue', () => {
  it('creates well', async () => {
    const wrapper = shallowMount(Home);
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('PlayerMenu-stub')).toBeTruthy();
  });
});
