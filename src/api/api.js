import axios from "axios";

const instanceAPI = axios.create({
  baseURL: "https://www.themuse.com/api/public",
});

export const appAPI = {
  getJobs(page) {
    return instanceAPI.get(`/jobs?page=${page}`);
  },

  getJobDetails(id) {
    return instanceAPI.get(`/jobs/${id}`);
  },
};
