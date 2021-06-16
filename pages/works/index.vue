<template>
    <div class="container">
        <h1>WORKS</h1>
    </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: 1s appear;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
