<template>

  <div class="bb">
    <div class="main">
      <div class="content">
        <article>
          <h1>{{blogs.title}}</h1>
          <p>{{blogs.date}}</p>
          <hr>
          <nuxt-content :document="blogs" />
        </article>
      </div>
    </div>
    <div class="side">
      <div class="sin">
        <div class="toc">
          <nav>
          <ul>
            <li
              v-for="link of blogs.toc"
              :key="link.id"
              :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
            >
              <NuxtLink :to="`#${link.id}`" class="toclnk">{{ link.text }}</NuxtLink>
            </li>
          </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
 async asyncData ({ $content, params }) {
   const blogs = await $content('blogs', params.slug || 'index').fetch()
   return { blogs }
 }
}
</script>

<style>
p{
}
hr {
   border-width: 2px 0px 0px 0px; 
   border-style: solid; 
   border-color: rgb(0, 0, 0);  
   height: 1px;    
   padding-bottom: 30px; 
}    
img{
  width:100%;
  animation: fadeIn 0.7s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
}
.youtube{
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.bb{
  padding: 50px 200px;
  display: flex;
  width:100%;
  background-color: rgb(255, 255, 255);
}
.main {
  width:70%;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
}
.content{
  padding:2%;
}
.side{
  width: 30%;
}
.sin{
  position:sticky;
  top:100px;
  width:300px;
  height:auto;
  background-color:#ffffff;
  margin-left:30px;
  text-decoration: none;
  background-color: #f2f4f7;
}
.toc{
  padding:20px;

}
.toc .toclnk{
  text-decoration-line: none;
    color:black;
}
@media screen and (max-width: 850px){
  .bb{
    display: block;
    padding: 100px;
    width:100%;
    background-color: rgb(255, 255, 255);
  }
  .main {
    width:100%;
  }
  .side{
    display: none;
  }
}

</style>