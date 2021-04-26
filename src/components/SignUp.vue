<template>
  <section class="container h-screen mx-auto flex">
    <div class="flex-grow flex flex-col max-w-xl justify-center p-6">
      <h1 class="text-6xl font-bold">Sign Up</h1>
      <p class="mt-4">
        Already have an account ?
        <span class="cursor-pointer underline">
          <router-link to="/login"> Login </router-link>
        </span>
      </p>
      <form @submit="handleSignUp">
        <label class="block mt-6"> Name</label>
        <input
          v-model="name"
          class="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
          type="text"
        />

        <label class="block mt-6"> Email</label>
        <input
          v-model="email"
          class="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
          type="text"
        />
        <label class="block mt-6"> Password</label>
        <input
          v-model="password"
          class="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
          type="password"
        />

        <div class="mt-6">
          <button
            :disabled="!email || !password || !name"
            type="submit"
            class="mx-auto mt-4 py-4 px-16 font-semibold rounded-lg shadow-md bg-gray-900 text-white border hover:border-gray-900 hover:text-gray-900 hover:bg-white focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </section>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      name: "",
    };
  },
  methods: {
    ...mapActions(["signup"]),
    handleSignUp(e) {
      e.preventDefault();
     
      console.log("signing up ...", this.email, this.password, this.name);
      this.signup({
        email: this.email,
        password: this.password,
        name: this.name,
      });
    },
  }
};
</script>
