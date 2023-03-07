import taskListApi from "../assets/tasks.json";

export const getTask = () => {
  return Promise.resolve(taskListApi);
};
