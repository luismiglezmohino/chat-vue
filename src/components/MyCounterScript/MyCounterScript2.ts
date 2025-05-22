import { useCounter } from '@/composables/useCounter';
//import { computed, ref, defineComponent } from 'vue';
import { defineComponent } from 'vue';
//Modo tradicional

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const { counter, squareCounter } = useCounter(props.value);
    // const counter = ref(props.value);
    // const squareCounter = computed(() => {
    //   return counter.value * counter.value;
    // });

    return {
      counter,
      squareCounter,
    };
  },
});
