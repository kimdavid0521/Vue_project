<template>
  <div>
    X: <input type="text" v-model.number="x" /> <br />
    Y: <input type="text" v-model.number="y" /> <br />
    <button @click="calcAdd(x, y)">계산</button>
    <div>결과: {{ result }}</div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "Calc2",
  setup() {
    const x = ref(10);
    const y = ref(20);
    const result = ref(30);

    const calcAdd = (num1, num2) => {
      result.value = num1 + num2;
    };

    return { x, y, result, calcAdd };
  },
};
</script>
