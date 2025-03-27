<template>
  <div>
    <Clac />
    <Calc2 />
    <Calc3 />
    <Calc4 />
  </div>
</template>
<script>
import Clac from "./components/Clac.vue";
import Calc2 from "./components/Calc2.vue";
import Calc3 from "./components/Calc3.vue";
import Calc4 from "./components/Calc4.vue";
export default {
  name: "App",
  components: { Clac, Calc2, Calc3, Calc4 },
};
</script>
