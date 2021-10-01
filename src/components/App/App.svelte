<script>
  import { ScaleOut } from "svelte-loading-spinners";

  import getJobs from "../../store/store.js";

  import Header from "./../Header/Header.svelte";
  import Jobs from "./../Jobs/Jobs.svelte";

  const [data, loading, error, getMoreJobs] = getJobs();
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
  }

  .content__box {
    display: flex;
    justify-content: center;

    width: 1200px;

    margin: 0 auto;
    margin-top: 50px;
  }
</style>
