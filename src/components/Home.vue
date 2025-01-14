<script setup>

</script>
<template>
<h1 id="title">The Vue: Home Menu</h1>
<br>
  <div class="card" style="width: 40%;">
    <div class="card-body">
      <h2 class="card-title">Guessing Game</h2>
      <h4 class="card-subtitle mb-2 text-muted">A fun number guessing game!</h4>
      <h5 class="card-text">A number guessing game where you can edit the parameters for an easy or difficult experience.</h5>
      <button class="btn btn-success"><router-link to="/GuessingGame"><h3>Play Now!</h3></router-link></button>
    </div>
  </div>
  <br />
  <br />
  <div class="card" style="width: 40%;">
    <div class="card-body">
      <h2 class="card-title">Info</h2>
      <h4 class="card-subtitle mb-2 text-muted">Information about the site's creator</h4>
      <h5 class="card-text">Information to contact the creator and view their work. Includes Username, Email, and A GitHub Link.</h5>
      <button class="btn btn-danger"><router-link to="/Info"><h3>View Now!</h3></router-link></button>
    </div>
  </div>
</template>

<style scoped>
router-link
{
  color: white;
  font-weight: bold;
}
a
{
  color: white;
  font-weight: bold;
}
h1
{
  color: mediumaquamarine;
  text-decoration: underline;
}
</style>