<template>
    <div class="container">
      <div class="parent">
        <div class="child">あ</div>
        <div class="child">い</div>
        <div class="child">う</div>
        <div class="child">え</div>
        <div class="child">お</div>
        <div class="child">
          <img class="sa_img" src = "/image/EqtZCtjUcAYoatf.jpg">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style>
.container {
  padding-top: 100px;
  padding-bottom: 100px;
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

.sa_img{
  width:200px;
  height: 112.5px;
  object-fit: cover;
}

.parent {
  font-size: 2rem;
  text-align: center;
  margin: 10px;
  padding: 10px;
  background: lightblue;
  display: flex;
}

.child {
  font-size: 2rem;
  text-align: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  background: lightgreen;
  width: 250px;
}

@media screen and (max-width: 1600px) {
  .parent {
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 400px) {
  .parent {
    display: block;
  }
}
</style>
