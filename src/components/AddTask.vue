<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "../store/Task.store";

const { addTask } = useTaskStore();
const taskName = ref("");
</script>
<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Please input task name"
      aria-label="Task name"
      v-model="taskName"
    />
    <button
      type="submit"
      class="btn btn-primary"
      @click="() => addTask(taskName)"
    >
      <i class="bi bi-plus"></i>
      Add Todo
    </button>
  </div>
</template>
