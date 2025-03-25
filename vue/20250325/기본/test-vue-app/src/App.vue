<template>
  <div>
    <h2>App 컴포넌트</h2>
    <!-- <ul>
      <CheckboxItem
        v-for="idol in idols"
        :key="idol.id"
        :name="idol.name"
        :checked="idol.checked"
      />
    </ul> -->
    <App2 />

    <App4 />
  </div>
</template>
<script>
import CheckboxItem from "./components/CheckboxItem.vue";
import App2 from "./App2.vue";
import App4 from "./App4.vue";

export default {
  name: "App",

  components: { CheckboxItem, App2, App4 },
  data() {
    return {
      idols: [
        { id: 1, name: "BTS", checked: true },
        { id: 2, name: "Black Pink", checked: false },
        { id: 3, name: "EXO", checked: false },
        { id: 4, name: "ITZY", checked: false },
      ],
    };
  },
};
</script>
