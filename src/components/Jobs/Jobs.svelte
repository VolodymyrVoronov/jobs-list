<script>
  import { fade } from "svelte/transition";

  import Job from "./../Job/Job.svelte";

  export let jobs;
  export let showMoreJobDetails;
</script>

<div transition:fade={{ duration: 500 }} class="jobs">
  {#each jobs as job (job.id)}
    <Job
      id={job.id}
      company={job.company}
      level={job.levels[0]}
      location={job.locations[0]}
      desc={job.contents}
      name={job.name}
      pubDate={job.publication_date}
      {showMoreJobDetails}
    />
  {/each}
</div>

<style>
  .jobs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    width: 100%;
  }
</style>
