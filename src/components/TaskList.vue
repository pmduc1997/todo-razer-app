<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTaskStore } from "../store/Task.store";

const taskStore = useTaskStore();
const { taskList } = storeToRefs(taskStore);
const { doneStatus, deleteTask } = taskStore;
</script>
<template>
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Status</th>
        <th scope="col">Created At</th>
        <th scope="col" class="text-end">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ id, name, status, createdAt } in taskList">
        <td>{{ name }}</td>
        <td>{{ status }}</td>
        <td>{{ createdAt }}</td>
        <td class="text-end">
          <button
            type="button"
            class="btn btn-success me-2"
            @click="() => doneStatus(id)"
          >
            <i class="bi bi-check2-circle"></i>
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="() => deleteTask(id)"
          >
            <i class="bi bi-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
