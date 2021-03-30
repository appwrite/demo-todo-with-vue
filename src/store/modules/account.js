import api from "../../api";

const state = {
  account: null,
  session: null,
};

const actions = {
  signup: async ({ commit }, { email, password, name }) => {
    try {
      const account = await api.createAccount(email, password, name);
      await api.createSession(email, password);
      commit("setAccount", account);
    } catch (e) {
      console.log("Error creating Account");
      commit(
        "setError",
        {
          show: true,
          message: e.message,
          color: "red",
        },
        { root: true }
      );
    }
  },
  fetchAccount: async ({ commit }) => {
    try {
      const account = await api.getAccount();
      commit("setAccount", account);
    } catch (e) {
      console.log("Error getting Account");
    }
  },
  login: async ({ commit }, { email, password }) => {
    try {
      console.log(email, password);
      await api.createSession(email, password);
      const account = await api.getAccount();
      commit("setAccount", account);
    } catch (e) {
      console.log("Error creating Session", e);
      commit(
        "setError",
        {
          show: true,
          message: e.message,
          color: "red",
        },
        { root: true }
      );
    }
  },
  logout: async ({ commit }) => {
    try {
      await api.deleteCurrentSession();
      commit("setAccount", null);
    } catch (e) {
      console.log("Error deleting session");
      commit(
        "setError",
        {
          show: true,
          message: "Failed to logout",
          color: "red",
        },
        { root: true }
      );
    }
  },
};

const getters = {
  getAccount: (state) => state.account,
  getSession: (state) => state.session,
};

const mutations = {
  setAccount: (state, account) => (state.account = account),
};

export default {
  state,
  actions,
  getters,
  mutations,
};
