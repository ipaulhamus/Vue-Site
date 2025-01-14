<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/images/Vue-Blog-Cover.png" width="60" height="30" class="d-inline-block align-top" alt="">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Vue Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/GuessingGame">Guessing Game</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Info">Info</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <br />
</template>

<style scoped>
li
{
  font-size: larger;
  font-weight: bold;
}
nav
{
  height: 15%;
  background-color: aquamarine;
}
</style>