<template>
  <div>
    <input
      type="text"
      :value="name"
      @input="$emit('update:name', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: "inputName",
  props: ["name"],
};
</script>
