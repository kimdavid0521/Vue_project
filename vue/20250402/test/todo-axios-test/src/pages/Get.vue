<template>
  <div>
    <h1>/get/:id(단건 조회)</h1>
  </div>
  <hr />
  <h3>조회할 todo의 id를 입력</h3>
  <div>
    <input type="text" placeholder="id 입력" v-model="id" />
    <button @click="getTodo">조회</button>
  </div>

  <div>
    <h3>조회 결과</h3>
    <ul>
      <li>id: {{ state.todo.id }}</li>
      <li>todo: {{ state.todo.todo }}</li>
      <li>desc: {{ state.todo.desc }}</li>
      <li>done: {{ state.todo.done }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const currentRoute = useRoute();
console.log("currentRoute:", currentRoute.params.id);
// 입력된 id
const id = ref(currentRoute.params.id);
const state = reactive({ todo: {} });

//조회 버튼 클릭 동작
const getTodo = async () => {
  // /api === https://localhost:3000
  const response = await axios.get(`/api/todos/${id.value}`);

  state.todo = response.data; // 응답 결과를 state.todo에 대입 -> 화면이 다시 렌더링
};

// 화면에 컴포넌트가 랜더링될때 단건 조회 호출
onMounted(() => {
  getTodo();
});
</script>
