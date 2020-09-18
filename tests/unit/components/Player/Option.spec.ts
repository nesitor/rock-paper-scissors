import { shallowMount } from '@vue/test-utils';

import Option from "@/components/Player/Option.vue";
import { Paper } from "@/models/paper";

describe('Option.vue', () => {
  it('creates well', () => {
    const wrapper = shallowMount(Option, {});
    expect(wrapper).toBeTruthy();
  });

  it('emit selected option on emit', async () => {
    const selected = new Paper();
    const wrapper = shallowMount(Option, {
      propsData: { throwing: selected },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('click')).toBeFalsy();
    wrapper.find('.option').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('click')?.length).toBe(1);
    expect(wrapper.emitted('click')?.shift()).toStrictEqual([selected]);
  });
});
