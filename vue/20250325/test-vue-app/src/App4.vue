<script>
import InputName from "./components/InputName.vue";
export default {
  name: "App4",
  components: { InputName },
  data() {
    return {
      parentName: "",
    };
  },
  methods: {
    nameChangedHandler(e) {
      this.parentName = e.name;
    },
  },
};
</script>

<template>
  <div>
    <InputName @nameChanged="nameChangedHandler" />
    <br />
    <h3>App데이터: {{ parentName }}</h3>
  </div>
</template>
