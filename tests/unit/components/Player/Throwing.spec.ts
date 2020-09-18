import { shallowMount } from '@vue/test-utils';

import Throwing from "@/components/Player/Throwing.vue";
import { Rock } from "@/models/rock";

describe('Throwing.vue', () => {
  it('creates well with the icon', () => {
    const selected = new Rock();
    const wrapper = shallowMount(Throwing, {
      stubs: ['fa-icon'],
      propsData: { throwing: selected },
    });
    expect(wrapper).toBeTruthy();
    expect(wrapper.text()).toBe(selected.name);
    expect(wrapper.findAll('fa-icon-stub')?.length).toBe(1);
  });
});
