<script setup lang="ts">
import AddTask from "../components/AddTask.vue";
import TaskList from "../components/TaskList.vue";
</script>
<template>
  <div class="d-flex justify-content-center">
    <div class="p-4 shadow rounded mt-4" style="width: 576px">
      <AddTask />
      <TaskList />
    </div>
  </div>
</template>
