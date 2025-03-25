<script>
import TodoList from "./components/TodoList.vue";
import InputTodo from "./components/InputTodo.vue";

export default {
  name: "App4",
  components: { InputTodo, TodoList },
  data() {
    let ts = new Date().getTime(); // ts 변수를 data 내부에서 선언
    return {
      todoList: [
        { id: ts, todo: "자전거 타기", completed: false },
        { id: ts + 1, todo: "딸과 공원 산책", completed: true },
        { id: ts + 2, todo: "일요일 애견 카페", completed: false },
        { id: ts + 3, todo: "Vue 원고 집필", completed: false },
      ],
    };
  },
};
</script>

<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App</div>
      <!-- class 오타 수정 -->
    </div>
    <div class="card card-default card-borderless">
      <div class="card-body">
        <InputTodo />
        <TodoList :todoList="todoList" />
        <!-- todoList props로 전달 -->
      </div>
    </div>
  </div>
</template>
