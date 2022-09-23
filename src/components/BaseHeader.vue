<template>
  <header class="container">
    <div class="icon">
      <div class="logo"></div>
      <h2>Photofy</h2>
    </div>
    <form class="query" @submit.prevent="onSubmit">
      <input
        type="text"
        placeholder="Pesquise aqui..."
        name="query"
        id="query"
        v-model="query"
      />
      <button class="btn" type="hidden" :disabled="!query">Buscar</button>
    </form>
  </header>
</template>

<script>
import { EventBus } from "@/main.js";

export default {
  name: "BaseHeader",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    onSubmit() {
      EventBus.$emit("query", this.query);
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 10px;
}
@media screen and (max-width: 768px) {
  header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .query {
    width: 100%;
  }
}
input,
.btn {
  margin: 0;
  height: 50px !important;
}
.query {
  display: flex;
  gap: 15px;
}
.icon {
  display: flex;
  align-items: center;
  gap: 0 15px;
  font-size: 13px;
}
.logo {
  width: 25px;
  height: 25px;
  background: #000;
  margin: 0 auto;
  border-radius: 5px;
  transform: rotate(45deg);
  animation: rotate 5s infinite;
}
@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>