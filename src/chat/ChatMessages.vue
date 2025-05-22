<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!--Forma corta-->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message"></ChatBubble>
      <!-- <ChatBubble
        v-for="message in messages"
        :key="message.id"
        :its-mine="message.itsMine"
        :message="message.message"
        :image="message.image"
      ></ChatBubble> -->
      <!-- Messages go here -->
      <!-- <ChatBubble :its-mine="true" message="Hola Mundo"></ChatBubble>
      <ChatBubble
        :its-mine="false"
        message="Hola Mundo"
        image="https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif"
      ></ChatBubble> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import ChatBubble from '@/chat/ChatBubble.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const props = defineProps<Props>();
//const { messages } = toRefs(props);

const chatRef = ref<HTMLDivElement | null>(null);

watch(props.messages, () => {
  //El tiempo es para que le de tiempo a redendizar
  setTimeout(() => {
    console.log('mensaje cambio', props.messages.length);
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    });
  }, 100);
});
</script>
