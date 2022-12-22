<template>
    <div class="container">
        <section id="posts">
          <div v-for="w in works" :key="w.slug"  class="post">
            <nuxt-link :to="'/works/'+ w.slug">
              <img :src="w.img" :alt="w.title + ' サムネイル'" class="item__img">
              <div class="hover-mask">
                <h2>{{w.title}}</h2>
                <p class="lead">{{w.date}}</p>
              </div>
            </nuxt-link>
          </div>
        </section>
    </div>
</template>

<script>
export default {
 async asyncData ({ $content, params }) {
   const query = await $content('works' || 'index').sortBy('date', 'desc')
   const works = await query.fetch()
   return { works }
 }
}
</script>

<style>
.container {
  padding-top: 100px;
  padding-bottom: 100px;
}
#posts {
  padding-left: 10%;
  padding-right: 10%;
  font-size: 0;
  animation: 3s appear;
}
#posts .post {
  position: relative;
  width: 100%;
  height: 200px;
  margin: 0px 0px;
  border: 2px solid #fff;
  display: inline-block;
  background-size: cover;
  background-position: center center;
  transition: all 300ms ease-out;
  overflow:hidden;
  vertical-align: middle;
}
#posts .post img {
  padding:0%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 300ms ease-out;
}
#posts .post:hover img {
  transform:scale(1.1,1.1);
  transition:0.8s all;
}
.hover-mask {
  background: rgba(0, 0, 0, .2); /* マスクの色(黒の50%) */
  bottom: 0;
  height: auto;
  left: 0;
  opacity: 0; /* 最初は透明(非表示) */
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity .6s ease; /* ゆっくりopacityのみへ変化させる */
  width: 100%;
}
.hover-mask:hover {
  opacity: 1; /* hoverしたら透過しない(表示させる) */
}
#posts .post h2 {
  color:#fff;
  position: absolute;
  bottom: 50px;
  margin: 0;
  font-size: 1.5vw;
  line-height: 0.8;
  font-family: 'MuseoSansRounded-900', 'Arial Black', sans-serif;
  padding: 0 30px;
  text-transform: uppercase;
  text-align: left;
  z-index: 1000;
  opacity: 0;
}
#posts .post:hover h2 {
  opacity: 1;
  transition:0.8s all;
}
#posts .post p {
  color:#fff;
  position: absolute;
  bottom: 25px;
  margin: 0;
  font-size: 0.8vw;
  line-height: 0.8;
  padding: 0 30px;
  text-transform: capitalize;
  text-align: left;
  z-index: 1000;
  opacity: 0;
}
#posts .post:hover p {
  opacity: 1;
  transition:0.8s all;
}





/* === MEDIA QUERIES === */

/* MOBILE FIRST */
/* XS */ 
/* SM */ @media (min-width: 34em) {#posts .post {width:50%;}}
/* MD */ @media (min-width: 48em) {#posts .post {width:25%;}}
/* LG */ @media (min-width: 62em) {#posts .post {width:33.33333333%;}}
/* XL */ @media (min-width: 75em) {#posts .post {width:25%;}}
</style>
