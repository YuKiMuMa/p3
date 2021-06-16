<template>
  <div class="header1">
    <h1>
      <a href="/">YuKiMuMa</a>
    </h1>
    <nav class="pc-nav">
        <ul>
            <li><a href="/works">WORKS</a></li>
            <li><a href="/blog">BLOG</a></li>
            <li><a href="/contact">CONTACT</a></li>
        </ul>
    </nav>
  </div>
</template>

<style>
* {
   box-sizing: border-box;
}

body {
   margin: 0;
   padding: 0;
   font-family: "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "Helvetica Neue", Helvetica, Arial, sans-serif;
   background-color: #e6e6e6;
}
.header1 {
    width: 100%;
    padding: 30px 4% 10px;
    background-color: #fff;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
}
h1 {
   margin: 0; padding: 0;
   font-size: 20px;
}
a {	
   text-decoration: none;
   color: #4b4b4b;
}
ul {
   list-style: none;
   margin: 0;
   display: flex;
}
li {
   margin: 0 0 0 15px;
   font-size: 14px;
}

nav {
   margin: 0 0 0 auto;
}
</style>