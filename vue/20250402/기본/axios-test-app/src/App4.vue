<template>
  <h1>todo 목록 얻기</h1>
</template>

<script setup>
import axios from "axios";
const requestAPI = async () => {
  const url = "/api/todos";
  let data = { todo: "윗몸일으키기 3세트", desc: "너무 빠르지 않게..." };
  const resp1 = await axios.post(url, data);
  console.log(resp1.data);
};
requestAPI();
</script>
