<script>
  import Header from "./../Header/Header.svelte";
</script>

<main class="content">
  <Header />

  <div class="content__box">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ducimus nulla totam inventore, repellat
      consequuntur deleniti, veritatis dolorum nesciunt eius repudiandae molestias ipsa numquam deserunt libero, quae
      placeat quaerat. Doloribus?
    </p>
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
