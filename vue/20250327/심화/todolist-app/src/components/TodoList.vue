<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <!-- props로 받은 데이터 수정 x 
        emit을 이용해서 부모로 전달하여 수정
        TodoItem -> TodoList -> App
        -->
        <TodoListItem
          v-for="todo in todoList"
          :todoItem="todo"
          @toggle-completed="emit('toggle-completed', $event)"
          @delete-todo="emit('delete-todo', $event)"
        />

        <!-- 
            $event: 자식 컴포넌트에서 방출된 payload 참조 변수 (id)
         -->
      </ul>
    </div>
  </div>
</template>

<script setup>
import TodoListItem from "./TodoListItem.vue";
const props = defineProps({
  todoList: { type: Array, required: true },
});

const emit = defineEmits(["toggle-completed", "delete-todo"]);
</script>
