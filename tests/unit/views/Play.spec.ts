import { shallowMount } from '@vue/test-utils';

import Play from "@/views/Play.vue";
import {Rock} from "@/models/rock";

describe('Play.vue', () => {
  it('creates well with player options', async () => {
    const $route = { params: { type: 'pc' } };
    const wrapper = shallowMount(Play, {
      mocks: { $route },
      stubs: ['router-link'],
    });
    await wrapper.vm.$nextTick();
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('h1').text()).toBe('Player vs Computer');
    expect(wrapper.findAll('HumanPlayer-stub').length).toBe(1);
    expect(wrapper.findAll('ComputerPlayer-stub').length).toBe(0);
    wrapper.setData({ haveFirst: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll('ComputerPlayer-stub').length).toBe(1);
    expect(wrapper.findAll('Result-stub').length).toBe(0);
  });

  it('creates well with computer options', async () => {
    const $route = { params: { type: 'cc' } };
    const wrapper = shallowMount(Play, {
      mocks: { $route },
      stubs: ['router-link'],
    });
    await wrapper.vm.$nextTick();
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('h1').text()).toBe('Computer vs Computer');
    expect(wrapper.findAll('HumanPlayer-stub').length).toBe(0);
    expect(wrapper.findAll('ComputerPlayer-stub').length).toBe(1);
    wrapper.setData({ haveFirst: true });
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll('ComputerPlayer-stub').length).toBe(2);
    expect(wrapper.findAll('Result-stub').length).toBe(0);
  });

  it('creates well with player options and result', async () => {
    const $route = { params: { type: 'pc' } };
    const wrapper = shallowMount(Play, {
      mocks: { $route },
      stubs: ['router-link'],
    });
    await wrapper.vm.$nextTick();
    expect(wrapper).toBeTruthy();
    expect(wrapper.findAll('HumanPlayer-stub').length).toBe(1);
    expect(wrapper.findAll('ComputerPlayer-stub').length).toBe(0);
    wrapper.setData({ haveFirst: true });
    (wrapper.vm as any).getFirstThrow(new Rock());
    (wrapper.vm as any).getSecondThrow(new Rock());
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll('HumanPlayer-stub').length).toBe(1);
    expect(wrapper.findAll('ComputerPlayer-stub').length).toBe(1);
    expect(wrapper.findAll('Result-stub').length).toBe(1);
  });
});
