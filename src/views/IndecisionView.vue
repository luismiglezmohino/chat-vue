<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessages :messages="messages" />
    <MessageBox @send-message="onMessage($event)" />
  </div>
</template>
<script setup lang="ts">
import ChatMessages from '@/chat/ChatMessages.vue';
import MessageBox from '@/chat/MessageBox.vue';
import { useChat } from '@/composables/useChat';
//import type { ChatMessage } from '@/interfaces/chat-message.interface';
//import { ref } from 'vue';

const { messages, onMessage } = useChat();
</script>
