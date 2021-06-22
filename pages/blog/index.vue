<template>
    <div class="container">
        <section id="posts">
          <a href="/blog/posts/test" title="A title of a page here" class="post" style="background-image: url(/image/i163.png);"><h2>A title of a page here</h2><p class="lead">By Author name</p></a>
          <a href="#" title="A title of a page here" class="post" style="background-image: url(/image/EqtZCtjUcAYoatf.jpg);"><h2>This post has a title</h2><p class="lead">By Author name</p></a>
          <a href="#" title="A title of a page here" class="post" style="background-image: url(https://placeimg.com/640/480/nature);"><h2>Another title on a post</h2><p class="lead">By Author name</p></a>
          <a href="#" title="A title of a page here" class="post" style="background-image: url(https://placeimg.com/640/480/people);"><h2>Posts are better with titles</h2><p class="lead">By Author name</p></a>
          <a href="#" title="A title of a page here" class="post" style="background-image: url(https://placeimg.com/640/480/tech);"><h2>Some titles are better than others</h2><p class="lead">By Author name</p></a>
          <a href="#" title="A title of a page here" class="post" style="background-image: url(https://placeimg.com/640/480/grayscale);"><h2>Titles can be long</h2><p class="lead">By Author name</p></a>
          <a href="#" title="A title of a page here" class="post" style="background-image: url(https://placeimg.com/640/480/sepia);"><h2>Short titles are a thing too</h2><p class="lead">By Author name</p></a>
          <a href="#" title="A title of a page here" class="post" style="background-image: url(https://placeimg.com/640/480/animals);"><h2>As long as they look different</h2><p class="lead">By Author name</p></a>
          <a href="#" title="A title of a page here" class="post" style="background-image: url(https://placeimg.com/640/480/tech);"><h2>Lorem ipsum sucks</h2><p class="lead">By Author name</p></a>
          <a href="#" title="A title of a page here" class="post" style="background-image: url(https://placeimg.com/640/480/animals);"><h2>A title of a page here</h2><p class="lead">By Author name</p></a>
          <a href="#" title="A title of a page here" class="post" style="background-image: url(https://placeimg.com/640/480/arch);"><h2>This post has a title</h2><p class="lead">By Author name</p></a>
          <a href="#" title="A title of a page here" class="post" style="background-image: url(https://placeimg.com/640/480/nature);"><h2>Another title on a post</h2><p class="lead">By Author name</p></a>
          <a href="#" title="A title of a page here" class="post" style="background-image: url(https://placeimg.com/640/480/people);"><h2>Posts are better with titles</h2><p class="lead">By Author name</p></a>
          <a href="#" title="A title of a page here" class="post" style="background-image: url(https://placeimg.com/640/480/tech);"><h2>Some titles are better than others</h2><p class="lead">By Author name</p></a>
          <a href="#" title="A title of a page here" class="post" style="background-image: url(https://placeimg.com/640/480/grayscale);"><h2>Titles can be long</h2><p class="lead">By Author name</p></a>
          <a href="#" title="A title of a page here" class="post" style="background-image: url(https://placeimg.com/640/480/sepia);"><h2>Short titles are a thing too</h2><p class="lead">By Author name</p></a>
          <a href="#" title="A title of a page here" class="post" style="background-image: url(https://placeimg.com/640/480/animals);"><h2>As long as they look different</h2><p class="lead">By Author name</p></a>
          <a href="#" title="A title of a page here" class="post" style="background-image: url(https://placeimg.com/640/480/tech);"><h2>Lorem ipsum sucks</h2><p class="lead">By Author name</p></a>
        </section>
    </div>
</template>

<script>
export default {
}
</script>

<style>
.container {
  padding-top: 100px;
  padding-bottom: 100px;
}
body {
  background-color:#000;
}
#posts {
  text-align: center;
  font-size: 0;
}
#posts .post {
  position: relative;
  width: 100%;
  height: 200px;
  margin: 0;
  border: 3px solid #000;
  display: inline-block;
  background-size: cover;
  background-position: center center;
  transition: all 300ms ease-out;
}
#posts .post h2 {
  color:#fff;
  position: absolute;
  bottom: 80px;
  margin: 0;
  font-size: 2vw;
  line-height: 0.8;
  font-family: 'MuseoSansRounded-900', 'Arial Black', sans-serif;
  padding: 0 60px;
  text-transform: uppercase;
  text-align: left;
  z-index: 1000;
}
#posts .post p {
  color:#fff;
  position: absolute;
  bottom: 40px;
  margin: 0;
  font-size: 1.5vw;
  line-height: 0.8;
  padding: 0 60px;
  text-transform: capitalize;
  text-align: left;
  z-index: 1000;
}
#posts .post:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #000;
  opacity: 0.5;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=50);
  filter: alpha(opacity=50);
  transition: all 300ms ease-out;
  content: '';
  z-index: 10;
}
#posts .post:hover:before {
  opacity: 0.2;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=20);
  filter: alpha(opacity=20);
}



/* === MEDIA QUERIES === */

/* MOBILE FIRST */
/* XS */ 
/* SM */ @media (min-width: 34em) {#posts .post {width:50%;}}
/* MD */ @media (min-width: 48em) {#posts .post {width:25%;}}
/* LG */ @media (min-width: 62em) {#posts .post {width:33.33333333%;}}
/* XL */ @media (min-width: 75em) {#posts .post {width:25%;}}
</style>
