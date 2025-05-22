<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <h1>Mi primera aplicación</h1>
  <hr />
  <MyCounter :value="2"></MyCounter>
  <MyCounter :value="1"></MyCounter>

  <MyCounterScript :value="10"></MyCounterScript>
  <MyCounterScript2 :value="8"></MyCounterScript2>
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/MyCounterScript/MyCounterScript2.vue';
</script>
