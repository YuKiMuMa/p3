<template>
<div class="bb">
  <div class="main">
    <div class="content">
      <article>
        <h1>{{works.title}}</h1>
        <p>{{works.date}}</p>
        <hr>
        <nuxt-content :document="works" />
      </article>
    </div>
    <nuxt-link :to="'/works/'" class="back">← Back to WORKS</nuxt-link>
  </div>
</div>
</template>

<script>
export default {
  
 async asyncData ({ $content, params }) {
   const works = await $content('works', params.slug || 'index').fetch()
   return { works }
 }
}
</script>

<style>
hr {
   border-width: 2px 0px 0px 0px; 
   border-style: solid; 
   border-color: rgb(0, 0, 0);  
   height: 1px;    
   padding-bottom: 30px; 
}    
img{
    display: flex;
    width:90%;
    padding-top:10%;
    margin-left: auto;
    margin-right: auto 
}
.bb{
  padding: 50px;
  display: flex;
  width:100%;
}
.main {
  display:flex;
  width:100%;
  flex-direction: column;
  align-items: center;
  background-color: #ffff;
}
.content{
  padding:10%;
}

h1{
    font-size:300%;
    font-family:'Playfair Display', serif;
}
.back{
    text-decoration-line: none;
    color:black;
    font-size:150%;
    font-family:'Playfair Display', serif;
}

.youtube{
  padding-top:10%;
  width:90%;
  height:540px;
  display: block;
  margin: 0 auto;
  max-width: 100%;
}


</style>