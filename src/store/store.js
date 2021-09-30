import { writable } from "svelte/store";

import { appAPI } from "./../api/api.js";

export default function (page) {
  const loading = writable(false);
  const error = writable(false);
  const data = writable({});

  async function get(page) {
    loading.set(true);
    error.set(false);

    try {
      const response = await appAPI.getJobs(page);

      if (response.status === 200) {
        console.log(response.data);
        data.set(response.data.results);
      }
    } catch (e) {
      error.set(e);
    }
    loading.set(false);
  }

  get();

  return [data, loading, error, get];
}
