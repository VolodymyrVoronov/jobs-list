import { writable } from "svelte/store";

import { appAPI } from "./../api/api.js";

export function getJobs(page = 1) {
  const loading = writable(false);
  const error = writable(false);
  const data = writable({});

  async function getMoreJobs(pageMore) {
    loading.set(true);
    error.set(false);

    try {
      const response = await appAPI.getJobs(pageMore || page);

      if (response.status === 200) {
        data.set(response.data.results);
      }
    } catch (e) {
      error.set(e);
      loading.set(false);
    }
    loading.set(false);
  }

  getMoreJobs();

  return [data, loading, error, getMoreJobs];
}

export function getDetails(id) {
  const loading = writable(false);
  const error = writable(false);
  const data = writable({});

  async function getJobDetails() {
    loading.set(true);
    error.set(false);

    try {
      const response = await appAPI.getJobDetails(id);

      if (response.status === 200) {
        data.set(response.data);
      }
    } catch (e) {
      error.set(e);
      loading.set(false);
    }
    loading.set(false);
  }

  getJobDetails();

  return [data, loading, error, getJobDetails];
}
