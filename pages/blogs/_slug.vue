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
      <hr>
      <p>↓シェアしてね↓</p>
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
    <div class="side">
      <div class="sin">
        <div class="toc">
          <nav>
          <ul>
            <li
              v-for="link of blogs.toc"
              :key="link.id"
              :class="{'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
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
  head(){
    return{
      title:"YuKiMuMa Blogs : "+this.blogs.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:description', property: 'og:description', content: 'YuKiMuMa blogs' },
        { hid: 'og:url', property: 'og:url', content: 'https://yukimuma.net/' },
        { hid: 'og:title', property: 'og:title', content: this.blogs.title },
        { hid: 'og:image', property: 'og:image', content: "https://yukimuma.net"+this.blogs.img }
      ],
    }
  },
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
hr {
   border-width: 2px 0px 0px 0px; 
   border-style: solid; 
   border-color: rgb(0, 0, 0);  
   height: 1px;    
   padding-bottom: 30px; 
}    
th{
  text-align: initial;
}
.content img{
  max-width: 100%;
  animation: fadeIn 0.7s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
  padding: 20px;
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
    padding: 50px 20px;
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
h2{
  padding-top: 20px;
  background:#d8e8ef;
  padding-bottom: 20px;
}
h3{
  padding-top: 20px;
}
h4{
  padding-top: 10px;
}



</style>