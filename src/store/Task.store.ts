import { defineStore } from "pinia";
import { ref } from "vue";
import { Task } from "../services/Task.type";
import taskListApi from "../assets/tasks.json";
import dayjs from "dayjs";
export const useTaskStore = defineStore("task", () => {
  const taskList = ref<Task[]>(taskListApi.data);

  const addTask = (name: string) => {
    taskList.value.push({
      name,
      status: "In Progress",
      id: "id" + dayjs(),
      createdAt: dayjs().format("YYYY-MM-DD"),
    });
  };

  const doneStatus = (id: string) => {
    taskList.value = taskList.value.map((item) => {
      if (item.id === id) {
        item.status = "Done";
      }
      return item;
    });
  };

  const deleteTask = (id: string) => {
    taskList.value = taskList.value.filter((item) => item.id !== id);
  };

  return {
    taskList,
    addTask,
    doneStatus,
    deleteTask,
  };
});
