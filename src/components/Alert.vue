<template>
  <div
    :class="[
      `bg-${color}-500`,
      'text-white px-6 py-4 border-0 rounded absolute right-0 mt-10 mr-10',
    ]"
  >
    <span class="text-xl inline-block mr-5 align-middle">
      <i class="fas fa-bell" />
    </span>
    <span class="inline-block align-middle font-semibold mr-8">
      {{ message }}
    </span>
    <button
      @click="dismissAlert"
      class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
    >
      <span>×</span>
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Alert",
  data() {
    return {
      timeout: null,
    };
  },
  methods: {
    ...mapMutations(["setError"]),
    dismissAlert() {
      this.setError({ show: false });
      this.timeout && clearTimeout(this.timeout);
    },
  },
  props: ["message", "color"],
  created() {
    this.timeout = setTimeout(() => this.setError({ show: false }), 2000);
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
};
</script>
