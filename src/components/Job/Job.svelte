<script>
  import { fade } from "svelte/transition";

  export let id;
  export let company;
  export let level;
  export let location;
  export let desc;
  export let name;
  export let pubDate;

  export let showMoreJobDetails;

  const convertedDate = new Date(pubDate).toUTCString().slice(4, 16);

  let showDesc = false;

  const onShowButtonClick = () => {
    showDesc = !showDesc;
  };

  const onMoreInfoButtonClick = () => {
    showMoreJobDetails(id);
  };
</script>

<section class="job">
  <div class="job__header">
    <p class="job__company-name">{company.name}</p>
    <p class="job__pub-date">{convertedDate}</p>
  </div>
  <div class="job__body">
    <p class="job__name">{name}</p>
    <div class="job__flex-box">
      <p class="job__level">{level.name}</p>
      &#9866;
      <p class="job__location">{location === undefined ? "Unknown" : location.name}</p>
    </div>
  </div>
  <button on:click={onShowButtonClick} class="job__button"
    >Show
    {#if showDesc}
      less
    {:else}
      more
    {/if}
  </button>
  {#if showDesc}
    <p in:fade|local out:fade|local class="job__desc">{@html desc}</p>
    <button on:click={onMoreInfoButtonClick} class="job__button" type="button">More Info</button>
  {/if}
</section>

<style>
  .job {
    display: flex;
    flex-direction: column;

    min-height: 150px;
    width: 500px;

    margin-bottom: 25px;
    padding: 15px 20px;

    border-left: 5px solid #66a29d;
    border-radius: 5px;

    background-color: #ffffff;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  }

  .job__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }

  .job__company-name {
    display: flex;

    font-size: 16px;
    line-height: 22px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: #629e9b;
  }

  .job__pub-date {
    display: flex;

    font-size: 16px;
    line-height: 22px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: #629e9b;
  }

  .job__body {
    display: flex;
    flex-direction: column;

    margin-top: 10px;
  }

  .job__name {
    display: flex;

    font-size: 22px;
    line-height: 28px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: rgb(82, 156, 153);
  }

  .job__flex-box {
    display: flex;
    flex-direction: row;
    align-items: baseline;

    margin: 10px 0;

    color: #b1b5b4;
  }

  .job__level {
    display: flex;

    margin-right: 15px;

    font-size: 18px;
    line-height: 24px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-decoration: underline;
  }

  .job__location {
    display: flex;

    margin-left: 15px;

    font-size: 18px;
    line-height: 24px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }

  .job__desc {
    display: flex;
    flex-direction: column;

    margin: 15px 0 10px 0;

    font-size: 18px;
    line-height: 22px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;

    color: rgb(121, 124, 123);
  }

  .job__button {
    display: flex;
    justify-content: center;

    padding: 10px 0;

    font-size: 18px;
    line-height: 22px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: #66a29d;

    background-color: #eaf4f5;

    border: none;
    border-radius: 5px;

    cursor: pointer;

    transition: 250ms ease;
  }

  .job__button:hover {
    color: #eaf4f5;
    background-color: #6da9a7;

    transition: 250ms ease;
  }
</style>
