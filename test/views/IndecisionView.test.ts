import ChatMessages from '@/chat/ChatMessages.vue';
import MessageBox from '@/chat/MessageBox.vue';
import IndecisionView from '@/views/IndecisionView.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('<IndecisionView />', () => {
  test('render chat messsages and messagebox correcty', () => {
    const wrapper = mount(IndecisionView);
    //expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
    expect(wrapper.findComponent(MessageBox).exists()).toBe(true);
  });

  test('calls onMessage whten sending a Message', async () => {
    const wrapper = mount(IndecisionView);
    const messageboxComponent = wrapper.findComponent(MessageBox);
    messageboxComponent.vm.$emit('sendMessage', 'Hola mundo');
    await new Promise((r) => setTimeout(r, 150));
  });
});
