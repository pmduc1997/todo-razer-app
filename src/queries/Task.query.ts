import { useQuery } from "vue-query";
import { getTask } from "../services/Task.service";

const TASK_CACHE_KEY = {
  get: "get",
  add: "add",
  update_status: "update_status",
  delete: "delete",
};

export const useGetTask = () => {
  return useQuery(TASK_CACHE_KEY.get, () => getTask());
};

//if there is a real api calls, its best practice to use vue-query hooks instead
