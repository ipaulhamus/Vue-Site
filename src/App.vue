<template>
<nav-bar></nav-bar>
<div id="content" class="content">
  <router-view></router-view>
</div>
  <div id="footer">
  <Footer name="Ian Paulhamus" year="2025"></Footer>
  </div>
</template>

<script setup>

import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
#content
{
  margin-left: 1rem;
}

#footer
{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5%;
}
</style>
