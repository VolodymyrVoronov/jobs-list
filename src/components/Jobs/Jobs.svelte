<script>
  import Job from "./../Job/Job.svelte";

  export let jobs;

  console.log(jobs);
</script>

<div class="jobs">
  <Job />
</div>

<style>
  .jobs {
    display: flex;
    flex-direction: column;
  }
</style>
