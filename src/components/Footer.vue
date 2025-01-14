<script setup>
defineProps({
  year: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
<div id="bg" class="d-flex align-items-center">
  <h3 class="col-md-4">{{ name }}, {{ year }} ©</h3>
</div>
</template>

<style scoped>
#bg
{
  background-color: black;
  width: 100%;
  height: 100px;
  font-weight: bold;
}
h3
{
  color: white;
  margin-left: 7%;
}

</style>