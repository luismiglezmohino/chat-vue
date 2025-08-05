import ChatMessages from '@/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';

const messages: ChatMessage[] = [
  { id: 1, message: 'Hola', itsMine: true },
  { id: 1, message: 'mundo', itsMine: false, image: 'http://holamundo.jpg' },
];

describe('<ChatMessages />', () => {
  test('renders chat messages correcty', () => {
    const wrapper = mount(ChatMessages, {
      props: {
        messages: messages,
      },
    });

    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });
    console.log(chatBubbles.length);
    expect(chatBubbles.length).toBe(messages.length);
  });

  test('scrolls  down to the bottom after messages update', async () => {
    const wrapper = mount(ChatMessages, {
      props: {
        messages: messages,
      },
    });
    const scrollMockSpy = vi.fn();
    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
    chatRef.scrollTo = scrollMockSpy;

    await wrapper.setProps({
      messages: [
        ...messages,
        {
          id: 3,
          message: 'Hey',
          itsMine: true,
        },
      ],
    });

    await new Promise((r) => setTimeout(r, 150));
    expect(scrollMockSpy).toHaveBeenCalledTimes(1);
    expect(scrollMockSpy).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: expect.any(Number),
    });
  });
});
