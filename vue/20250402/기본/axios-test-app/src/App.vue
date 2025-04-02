<template>
  <h1>todo 콘솔 출력</h1>
</template>

<script setup>
import axios from "axios";

const url = "/api/todos";

axios
  .get(url)
  .then((response) => {
    console.log("전체 todo:", response.data);
    return axios.get(`${url}/1`);
  })
  .then((response) => {
    console.log("id가 1인 todo:", response.data);
  })
  .catch((error) => {
    console.error("api 요청 오류 발생:", error);
  });
</script>
