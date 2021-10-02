<script>
  import { onMount, onDestroy } from "svelte";
  import { fly } from "svelte/transition";
  import { Stretch } from "svelte-loading-spinners";

  import { getDetails } from "../../store/store.js";

  export let jobIdForDetails;
  export let closeModal;

  const [data, loading, error] = getDetails(jobIdForDetails);

  const convertedDate = (date) => {
    return new Date(date).toUTCString().slice(4, 16);
  };

  const onCloseButtonClick = () => {
    closeModal();
  };

  onMount(() => {
    document.querySelector("body").style.overflow = "hidden";
  });

  onDestroy(() => {
    document.querySelector("body").style.overflow = "auto";
  });
</script>

<div class="backdrop" on:click|self>
  <div class="backdrop__btn-close" on:click={() => onCloseButtonClick()}>&#10006;</div>

  <div class="modal" transition:fly={{ x: -200, duration: 1000 }}>
    {#if $loading}
      <Stretch color="#5da4a4" size="50" />
    {:else if $error}
      Error: {$error}
    {:else}
      <div class="modal__header">
        <p class="modal__company-name">{$data.company.name}</p>
        <p class="modal__pub-date">{convertedDate($data.publication_date)}</p>
      </div>
      <p class="modal__name">{$data.name}</p>
      <div class="modal__flex-box">
        <p class="modal__level">{$data.levels[0].name}</p>
        &#9866;
        <p class="modal__location">{$data.locations === undefined ? "Unknown" : $data.locations[0].name}</p>
      </div>
      <p class="modal__desc">{@html $data.contents}</p>
      <a href={$data.refs.landing_page} target="_blank" class="modal__link">{$data.refs.landing_page}</a>
    {/if}
  </div>
</div>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);

    overflow: auto;
  }

  .backdrop__btn-close {
    position: fixed;

    top: 25px;
    right: 45px;

    font-size: 50px;

    color: #f0fafb;

    transition: 0.5s ease;
  }

  .backdrop__btn-close:hover {
    cursor: pointer;

    transform: rotate(180deg);

    transition: 0.5s ease;
  }

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 800px;
    margin: 50px auto;
    padding: 25px;

    background: #f0fafb;
    border-radius: 10px;
  }

  .modal__header {
    display: flex;
    flex-direction: row;

    width: 100%;
  }

  .modal__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }

  .modal__company-name {
    display: flex;

    font-size: 22px;
    line-height: 26px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: #629e9b;
  }

  .modal__pub-date {
    display: flex;

    font-size: 18px;
    line-height: 24px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: #629e9b;
  }

  .modal__name {
    display: flex;
    justify-content: flex-start;

    width: 100%;

    margin-top: 15px;

    font-size: 28px;
    line-height: 32px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: rgb(82, 156, 153);
  }

  .modal__flex-box {
    display: flex;
    flex-direction: row;
    align-items: baseline;

    width: 100%;

    margin: 15px 0;

    color: #b1b5b4;
  }

  .modal__level {
    display: flex;

    margin-right: 15px;

    font-size: 20px;
    line-height: 24px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-decoration: underline;
  }

  .modal__location {
    display: flex;

    margin-left: 15px;

    font-size: 20px;
    line-height: 24px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }

  .modal__desc {
    display: flex;
    flex-direction: column;

    margin: 15px 0 10px 0;

    font-size: 18px;
    line-height: 22px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;

    color: rgb(121, 124, 123);
  }

  .modal__link {
    display: flex;

    margin-top: 15px;

    font-size: 22px;
    line-height: 26px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: #629e9b;
  }
</style>
