import { shallowMount } from '@vue/test-utils';

import PlayMenuItem from "@/components/PlayMenu/PlayMenuItem.vue";

describe('PlayMenuItem.vue', () => {
  let $routerSpy: any;

  beforeEach(() => {
    $routerSpy = {
      push: jest.fn(),
    }
  });

  it('creates well for player vs computer', async () => {
    const tile = 'Player vs Computer';
    const wrapper = shallowMount(PlayMenuItem, {
      mocks: { $router: $routerSpy },
      propsData: { type: 'pc' }
    });
    expect(wrapper).toBeTruthy();
    expect( wrapper.find('li').text()).toBe(tile);
    wrapper.find('li').trigger('click');
    await wrapper.vm.$nextTick();
    expect($routerSpy.push).toBeCalledWith({ name: 'play', params: { type: 'pc' } });
  });

  it('creates well for computer vs computer', async () => {
    const tile = 'Computer vs Computer';
    const wrapper = shallowMount(PlayMenuItem, {
      mocks: { $router: $routerSpy },
      propsData: { type: 'cc' }
    });
    expect( wrapper.find('li').text()).toBe(tile);
    wrapper.find('li').trigger('click');
    await wrapper.vm.$nextTick();
    expect($routerSpy.push).toBeCalledWith({ name: 'play', params: { type: 'cc' } });
  });
});
