<template>
  <section
    class="container h-screen max-h-screen px-3 max-w-xl mx-auto flex flex-col"
  >
    <div class="my-auto p-16 rounded-lg text-center">
      <div class="font-bold text-3xl md:text-5xl lg:text-6xl">
        📝 <br />
        &nbsp; toTooooDoooos
      </div>

      <form @submit="handleAddTodo">
        <input
          type="text"
          v-model="content"
          class="w-full my-8 px-6 py-4 text-xl rounded-lg border-0 focus:ring-2 focus:ring-gray-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl shadow-md"
          placeholder="🤔   What to do today?"
        />
      </form>

      <ul>
        <todo-item v-for="item in todos" :key="item['$id']" :todo="item" />
      </ul>
    </div>
  </section>

  <section class="absolute bottom-0 right-0 py-3 px-6 mr-8 mb-8">
    <button
      @click="handleLogout"
      class="mx-auto mt-4 py-3 px-12 font-semibold text-md rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
    >
      Logout 👋
    </button>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import TodoItem from "./TodoItem.vue";

export default {
  components: { TodoItem },
  name: "Todo",
  data() {
    return {
      content: "",
    };
  },
  computed: mapGetters(["todos", "getAccount"]),
  methods: {
    ...mapActions(["logout", "fetchTodos", "addTodo", "fetchAccount"]),
    handleLogout() {
      this.logout();
    },
    handleAddTodo(e) {
      e.preventDefault();
      const userId = this.getAccount["$id"];
      if (!userId || !this.content) {
        console.log("User id is null/empty");
      } else {
        const data = {
          content: this.content,
          isComplete: false,
        };
        this.addTodo({
          data,
          userId
        });
        this.content = ""
      }
    },
  },
  created() {
    if (!this.getAccount) this.fetchAccount();
    this.fetchTodos();
  },
};
</script>
