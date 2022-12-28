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
  head(){
    return{
      title:"YuKiMuMa Works : "+this.works.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:description', property: 'og:description', content: 'YuKiMuMa' },
        { hid: 'og:url', property: 'og:url', content: 'https://yukimuma.net/' },
        { hid: 'og:title', property: 'og:title', content: 'YuKiMuMa' },
        { hid: 'og:image', property: 'og:image', content: "https://yukimuma.net"+this.works.img }
      ],
    }
  },
 async asyncData ({ $content, params }) {
   const works = await $content('works', params.slug || 'index').fetch()
   return { works }
 }
}
</script>

<style>
h1{
  margin: 20px auto;
}
hr {
   border-width: 1px 0px 0px 0px; 
   border-style: solid; 
   border-color: rgb(0, 0, 0);  
   height: 1px;    
    margin: 30px auto;
}    
img{
    display: flex;
    width:80%;
    padding-top:10%;
    margin-left: auto;
    margin-right: auto 
}

a {
color:rgb(120, 120, 120);
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
  width:100%;
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
    position: relative;
    display: flex;
    width:80%;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto 

}
.scloud{
    position: relative;
    display: flex;
    width:80%;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto 

}
.youtube:before {
    content:"";
    display: block;
    padding-top: 56.25%; /* 高さと幅の比を16:9に固定。9/16*100=56.25 */
}

#content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.video-wrap {
  padding-top:10%;
  width:90%;
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
.gdrive{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.gvideo{
  position: relative;
  width:100%; /* 横幅は100%で固定 */
  height:0; /* 高さは0にしておく(padding-topで高さを指定するため) */
  padding-top: 56.25%; /* 高さを指定(16:9) */  display:block;
  width:100%; /* 横幅は100%で固定 */
}



</style>