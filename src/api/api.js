import axios from "axios";

const instanceAPI = axios.create({
  baseURL: "https://www.themuse.com/api/public",
});

export const appAPI = {
  getJobs(page = 1) {
    return instanceAPI.get(`/jobs?page=${page}`);
  },

  getJobDitails(id) {
    return instanceAPI.get(`:${id}`);
  },
};
