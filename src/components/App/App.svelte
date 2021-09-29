<script>
  import Router from "svelte-spa-router";

  import Header from "./../Header/Header.svelte";
  import Jobs from "./../Jobs/Jobs.svelte";

  const routes = {
    "/job/:id": Jobs,
  };
</script>

<main class="content">
  <Header />

  <div class="content__box">
    <a href="#/job/{123}">jobs</a>

    <Router {routes} />
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
