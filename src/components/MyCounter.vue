<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3 data-testid="square-label">Square: {{ squareCounter }}</h3>
    <div>
      <button class="btn" @click="increment">+1</button>
      <button class="btn" @click="decrement">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

interface Props {
  value: number;
}
const props = defineProps<Props>();

const { counter, squareCounter, increment, decrement } = useCounter(props.value);
//import { computed, ref } from 'vue';

/*const props = defineProps({
  value: { type: Number, required: true },
});*/

/*const props2 = defineProps<{
  value: number;
}>();*/

// interface Props {
//   value: number;
// }

// const props = defineProps<Props>();

// const counter = ref(props.value);
// const increment = () => {
//   counter.value += 1;
// };
// const decrement = () => {
//   counter.value -= 1;
// };
// const squareCounter = computed(() => {
//   return counter.value * counter.value;
// });
</script>

<!-- Si se añade scoped solo se añade el estilo a este componente -->
<style scoped>
@reference '../styles.css';

.btn {
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
}

h1 {
  color: green;
}
</style>
