<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2.ts">

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
h1 {
  color: green;
}
</style>
