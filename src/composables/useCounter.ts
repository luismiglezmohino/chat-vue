import { computed, ref } from 'vue';
//Si se hace fuera, cambiarian todo a la vez, gestor de estado
//const counter = ref(10);

export const useCounter = (inicialValue: number = 5) => {
  const counter = ref(inicialValue);
  const squareCounter = computed(() => {
    return counter.value * counter.value;
  });

  const increment = () => {
    counter.value += 1;
  };
  const decrement = () => {
    counter.value -= 1;
  };

  return {
    counter,
    squareCounter,
    increment,
    decrement,
  };
};
