import { mount } from '@vue/test-utils';

import { Paper } from "@/models/paper";
import OptionList from "@/components/Player/OptionList.vue";
import Throwing from "@/components/Player/Throwing.vue";
import { Rock } from "@/models/rock";
import { Scissors } from "@/models/scissors";

describe('OptionList.vue', () => {
  it('creates well', () => {
    const wrapper = mount(OptionList, {
      stubs: ['fa-icon'],
      propsData: { options: [new Rock(), new Paper(), new Scissors()] },
    });
    expect(wrapper).toBeTruthy();
    expect(wrapper.findAllComponents(Throwing).length).toBe(3);
  });

  it('emit option selected on option click', async () => {
    const selected = new Paper();
    const wrapper = mount(OptionList, {
      stubs: ['fa-icon'],
      propsData: { options: [new Rock(), new Paper(), new Scissors()] },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('click')).toBeFalsy();
    wrapper.findAllComponents(Throwing)?.at(1).trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('option-selected')?.length).toBe(1);
    expect(wrapper.emitted('option-selected')?.shift()).toStrictEqual([selected]);
  });
});
