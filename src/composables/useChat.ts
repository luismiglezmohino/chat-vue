import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([
    /*{
      id: new Date().getTime(),
      message: 'Hola',
      itsMine: true,
    },
    {
      id: new Date().getTime() + 1,
      message: 'Yes',
      itsMine: false,
      image: 'https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif',
    },
    {
      id: new Date().getTime() + 2,
      message: '¿?',
      itsMine: true,
    },*/
  ]);

  const onMessage = async (text: string) => {
    if (text.length === 0) return;
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    //Evaluar si termina con un ?
    if (!text.endsWith('?')) return;

    await sleep(1.5);
    const { answer, image } = await getHerResponse();
    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });
  };

  const getHerResponse = async () => {
    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesNoResponse;
    return data;
  };

  return {
    //Properties
    messages,
    //Methods
    onMessage,
  };
};
