<script>
  import { fade } from "svelte/transition";

  export let getMoreJobsItems;
  export let loading;

  let curPage = 1;

  const onPrevButtonClick = () => {
    if (curPage > 1) {
      curPage -= 1;
    }
    getMoreJobsItems(curPage);
  };

  const onNextButtonClick = () => {
    if (curPage !== 50) {
      curPage += 1;
    }
    getMoreJobsItems(curPage);
  };
</script>

<footer transition:fade class="footer">
  {#if !$loading}
    <button on:click={onPrevButtonClick} class="footer__btn footer__btn--prev" disabled={curPage === 1} type="button"
      >Previous page</button
    >
    <button on:click={onNextButtonClick} class="footer__btn footer__btn--next" disabled={curPage === 50} type="button"
      >Next page</button
    >
  {/if}
</footer>

<style>
  .footer {
    display: flex;
    justify-content: center;

    margin: 0 auto;
    padding: 25px;
  }

  .footer__btn {
    display: flex;
    justify-content: center;

    width: 545px;

    padding: 10px 25px;

    font-size: 18px;
    line-height: 22px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: #66a29d;

    background-color: #eaf4f5;

    border: 1px solid #6da9a7;
    border-radius: 5px;

    cursor: pointer;

    transition: 250ms ease;
  }

  .footer__btn:hover {
    color: #eaf4f5;
    background-color: #6da9a7;

    transition: 250ms ease;
  }

  .footer__btn:disabled {
    cursor: default;
    pointer-events: none;

    opacity: 0.5;
  }

  .footer__btn--prev {
    margin-right: 45px;
  }
</style>
