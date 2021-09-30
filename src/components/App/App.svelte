<script>
  import { onMount } from "svelte";

  import fetchJobs from "../../store/store.js";

  import Header from "./../Header/Header.svelte";
  import Jobs from "./../Jobs/Jobs.svelte";

  const [data, loading, error, get] = fetchJobs(1);

  $: console.log($data);
</script>

<main class="content">
  <Header />
  <div class="content__box">
    <Jobs />
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
