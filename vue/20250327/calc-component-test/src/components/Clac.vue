<template>
  <div>
    x: <input type="text" v-model.number="x" /> y:
    <input type="text" v-model.number="y" />
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Calc",
  setup() {
    const x = ref(10);
    const y = ref(20);

    return { x, y };
  },
};
</script>
