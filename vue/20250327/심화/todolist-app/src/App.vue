<!-- // vueinit으로 vue3의 기본 스니펫 -->
<template>
  <div class="container">
    <div class="card card-body bg-light">
      <div class="title">🕒 TodoList App 💻</div>
    </div>

    <div class="card card-default card-borderless">
      <div class="card-body">
        <!-- 할일 입력 받는 input 
        방출(add-todo)된 이벤트가 감지 되었을때
        addTodo() 메서드 호출
        -->
        <InputTodo @add-todo="addTodo" />

        <!-- 카운트 컴포넌트 -->
        <TodoCount :todoList="state.todoList" />

        <!-- 목록 컴포넌트 
        목록 화면 렌더링에 필요한 데이터 todolist를 부모(App.vue)가 가지고 있음
        - 부모 -> 자식 데이터 전달: props 이용  
        이때 v-bind: 전달할 이름="데이터"
        -->
        <TodoList
          v-bind:todoList="sortedList"
          @toggle-completed="toggleCompleted"
          @delete-todo="deleteTodo"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import TodoList from "./components/TodoList.vue";
import InputTodo from "./components/InputTodo.vue";
import TodoCount from "./components/TodoCount.vue";
const state = reactive({ todoList: [] });
const addTodo = (receiveTodo) => {
  state.todoList.push({
    id: Date.now(),
    todo: receiveTodo,
    completed: false,
  });
};

const sortedList = computed(() => {
  state.todoList.sort((t1, t2) => {
    // true > false  -> 결과 : true
    if (t1.completed > t2.completed) {
      return 1; // 양수 반환 시 자리 바뀜 (t1, t2 -> t2, t1)
    }

    if (t1.completed < t2.completed) {
      return -1; // 음수 반환 시 자리 바꿈 X
    }

    // 위 if문 실행 X === completed가 같을 경우
    // -> 문자열 오름 차순 정렬

    // 모두 소문자로 변경(대소문자 구분 X)
    const todo1 = t1.todo.toLowerCase();
    const todo2 = t2.todo.toLowerCase();

    if (todo1 > todo2) return 1; // 자리 교체
    else if (todo1 === todo2) return 0; // 유지
    else return -1; // 유지
  });

  // 정렬된 todoList 반환
  return state.todoList;
});

const toggleCompleted = (id) => {
  let index = state.todoList.findIndex((item) => id === item.id);
  state.todoList[index].completed = !state.todoList[index].completed;
};

/* 할 일 삭제 메서드 */
const deleteTodo = (id) => {
  // 배열.findIndex(콜백함수) : 콜백 함수의 결과가 true인 index를 반환

  let index = state.todoList.findIndex((item) => id === item.id);
  state.todoList.splice(index, 1);
};
</script>
