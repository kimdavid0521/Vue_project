<template>
  <h1>todo 목록 얻기</h1>
</template>

<script setup>
import axios from "axios";
const url = "/api/todos";
const handleApi = async () => {
  const response = await axios.get(url);
  console.log(response);
};
handleApi();
</script>
