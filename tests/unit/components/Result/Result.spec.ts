import { shallowMount } from '@vue/test-utils';

import { Rock } from "@/models/rock";
import Result from "@/components/Result/Result.vue";
import {Paper} from "@/models/paper";
import {Scissors} from "@/models/scissors";

describe('Result.vue', () => {
  it('creates well with tie result', async () => {
    const selected1 = new Rock();
    const selected2 = new Rock();
    const text = 'It\'s a Tie!';
    const wrapper = shallowMount(Result, {
      propsData: { playerOne: selected1, playerTwo: selected2 },
    });
    expect(wrapper).toBeTruthy();
    await wrapper.vm.$nextTick();
    expect(wrapper.text().trim()).toBe(text);
  });

  it('creates well with first winner', async () => {
    const selected1 = new Scissors();
    const selected2 = new Paper();
    const text = 'And the winner is.... The First Player';
    const wrapper = shallowMount(Result, {
      propsData: { playerOne: selected1, playerTwo: selected2 },
    });
    expect(wrapper).toBeTruthy();
    await wrapper.vm.$nextTick();
    const obtainedText = wrapper.text().replace('        ', '').replace('\n', '');
    expect(obtainedText).toBe(text);
  });

  it('creates well with second winner', async () => {
    const selected1 = new Rock();
    const selected2 = new Paper();
    const text = 'And the winner is.... The Second Player';
    const wrapper = shallowMount(Result, {
      propsData: { playerOne: selected1, playerTwo: selected2 },
    });
    expect(wrapper).toBeTruthy();
    await wrapper.vm.$nextTick();
    const obtainedText = wrapper.text().replace('        ', '').replace('\n', '');
    expect(obtainedText).toBe(text);
  });
});
