<template>
  <li class="flex justify-between items-center mt-4 px-4">
    <div class="flex">
      <input
        type="checkbox"
        @click="handleCheck(todo)"
        v-model="todo['isComplete']"
        class="h-6 w-6 text-green-500 rounded-md border-4 border-green-200 focus:ring-0 transition duration-75 ease-in-out transform hover:scale-125"
      />
      
      <div
        class="capitalize ml-3 text-md font-medium"
        :class="todo['isComplete'] ? 'line-through' : ''"
      >
        {{ todo["content"] }}
      </div>
    </div>
    <button
      @click="handleDelete(todo)"
      class="focus:outline-none transition duration-75 ease-in-out transform hover:scale-125"
    >
      <img
      class="w-6 h-6 inline stroke-current text-red-500"
        src="../assets/delete.svg"
      />
    </button>
  </li>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    ...mapActions(["updateTodo", "deleteTodo"]),
    handleCheck(todo) {
      let data = {
        isComplete: !todo["isComplete"],
      };
      const payload = {
        data: data,
        documentId: todo["$id"]
      };
      this.updateTodo(payload);
    },
    handleDelete(todo) {
      this.deleteTodo(todo["$id"]);
    },
  },
};
</script>
