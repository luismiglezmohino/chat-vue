import { useChat } from '@/composables/useChat';
import { describe, expect, test, vi } from 'vitest';

describe('useChat', () => {
  test('add message correctly when onMessage is called', async () => {
    const text = 'Hola Mundo';
    const { messages, onMessage } = useChat();
    await onMessage(text);
    expect(messages.value.length).toBe(1);
    expect(messages.value[0].itsMine).toBe(true);
    expect(messages.value[0].message).toBe(text);
    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      message: text,
      itsMine: true,
    });
  });

  test('add nothing if text is empty', async () => {
    const text = '';
    const { messages, onMessage } = useChat();
    await onMessage(text);
    expect(messages.value.length).toBe(0);
  });

  test('gets her response correcty when message ends with ?', async () => {
    const text = 'Quieres cafe?';
    const { messages, onMessage } = useChat();
    await onMessage(text);
    await new Promise((r) => setTimeout(r, 200));
    const [myMessage, herMessage] = messages.value;
    expect(messages.value.length).toBe(2);
    expect(herMessage.itsMine).toBe(false);
    expect(herMessage).toEqual({
      id: expect.any(Number),
      image: expect.any(String),
      message: expect.any(String),
      itsMine: false,
    });
  });

  test('mock response - fetch api', async () => {
    const mockResponse = { answer: 'yes', image: 'example.jpg' };
    (window as any).fetch = vi.fn(async () => ({
      json: async () => mockResponse,
    }));
    const text = 'Quieres cafe?';
    const { messages, onMessage } = useChat();
    await onMessage(text);
    //await new Promise((r) => setTimeout(r, 200));
    const [, herMessage] = messages.value;
    expect(messages.value.length).toBe(2);
    expect(herMessage.itsMine).toBe(false);
    expect(herMessage).toEqual({
      id: expect.any(Number),
      image: mockResponse.image,
      message: mockResponse.answer,
      itsMine: false,
    });
  });
});
