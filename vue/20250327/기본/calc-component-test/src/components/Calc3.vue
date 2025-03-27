<template>
  <div>
    X: <input type="text" v-model.number="state.x" /> <br />
    Y: <input type="text" v-model.number="state.y" /> <br />
    <button @click="calcAdd(x, y)">계산</button> <br />
    <div>결과: {{ state.result }}</div>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  name: "Calc3",
  setup() {
    const state = reactive({ x: 10, y: 20, result: 30 });

    const calcAdd = (num1, num2) => {
      state.result = num1 + num2;
    };

    return { state, calcAdd };
  },
};
</script>
