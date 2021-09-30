<script>
  import { onMount } from "svelte";
  import { ScaleOut } from "svelte-loading-spinners";

  import fetchJobs from "../../store/store.js";

  import Header from "./../Header/Header.svelte";
  import Jobs from "./../Jobs/Jobs.svelte";

  const [data, loading, error, getMoreJobs] = fetchJobs(1);
</script>

<main class="content">
  <Header />
  <div class="content__box">
    {#if $loading}
      <ScaleOut color="#5da4a4" size="150" />
    {:else if $error}
      Error: {$error}
    {:else}
      <Jobs jobs={$data} />
    {/if}
  </div>
</main>

<style>
  .content {
    display: flex;
    flex-direction: column;

    height: 100vh;

    background-color: #f0fafb;
  }

  .content__box {
    display: flex;
    justify-content: center;

    max-width: 1200px;

    margin: 0 auto;
    margin-top: 50px;
  }
</style>
