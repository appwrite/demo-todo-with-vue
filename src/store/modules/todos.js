import api from "../../api";
import { Server } from "../../utils/config";

const state = {
  todos: [],
};

const actions = {
  async fetchTodos({ commit }) {
    try {
      const data = await api.listDocuments(Server.collectionID);
      commit("setTodos", data.documents);
    } catch (e) {
      console.log("Could not fetch documents ", e);
      commit(
        "setError",
        {
          show: true,
          message: "Failed to fetch Todo",
          color: "red",
        },
        { root: true }
      );
    }
  },
  async addTodo({ commit }, { data, userId }) {
    try {
      const response = await api.createDocument(
        Server.collectionID,
        data,
        userId
      );
      console.log(response);
      commit("addTodo", response);
    } catch (e) {
      console.log("Could not create document", e);
      commit(
        "setError",
        {
          show: true,
          message: "Failed to Add Todo",
          color: "red",
        },
        { root: true }
      );
    }
  },
  async updateTodo({ commit }, { documentId, data}) {
    try {
      const response = await api.updateDocument(
        Server.collectionID,
        documentId,
        data
      );
      commit("updateTodo", response);
    } catch (e) {
      console.log("Could not update document", e);
      commit(
        "setError",
        {
          show: true,
          message: "Failed to updated Todo",
          color: "red",
        },
        { root: true }
      );
    }
  },
  async deleteTodo({ commit }, documentId) {
    try {
      await api.deleteDocument(Server.collectionID, documentId);
      commit("deleteTodo", documentId);
    } catch (e) {
      console.log("Could not delete document", e);
      commit(
        "setError",
        {
          show: true,
          message: "Failed to delete Todo",
          color: "red",
        },
        { root: true }
      );
    }
  },
};

const getters = {
  todos: (state) => state.todos,
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, todo) => state.todos.unshift(todo),
  deleteTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo["$id"] !== id)),
  updateTodo: (state, updatedTodo) => {
    const index = state.todos.findIndex(
      (todo) => todo["$id"] === updatedTodo["$id"]
    );
    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo);
    }
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
