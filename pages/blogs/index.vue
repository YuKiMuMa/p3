<template>
 <div class="container">
    <div v-for="b in blogs" :key="b.slug">
      <ul class="card-list">
        <li class="card">
          <nuxt-link :to="'/blogs/'+ b.slug" class="card-image"> 
              <img :src="b.img" :alt="b.title + ' サムネイル'" class="p-article-item__img">
          </nuxt-link>
          <nuxt-link :to="'/blogs/'+ b.slug" class="card-description"> 
            <h2>{{b.title}}</h2>
            <p>{{b.date}}</p>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
 async asyncData ({ $content, params }) {
   const query = await $content('blogs' || 'index').sortBy('date','desc')
   const blogs = await query.fetch()
   return { blogs }
 }
}
</script>

<style>
.container {
  padding-top: 100px;
  padding-bottom: 100px;
}
.card-image > img {
  height: 10rem;
  width: 100%;
  object-fit: cover;

}

.card-image {
  display: block;
  padding: 0.5em 0.5em;
}

.card-image.is-loaded {
  filter: none; /* remove the blur on fullres image */
  transition: filter 1s;
}

.card-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  display: block;
  width: 60%;
  height:30%;
  margin: 1rem;
  font-size: 1rem;
  text-decoration: none;
  /*overflow: hidden;
  transition: transform 0.1s ease-in-out, box-shadow 0.1s;*/
  align-items: center;
  background-color: #ffff;
  transition:		all 0.5s ease;
}

.card:hover {
  transform: translateY(-0.5rem) scale(1.0125);
  box-shadow: 0 0.5em 3rem -1rem rgba(0,0,0,0.5);
  transition:		all 0.5s ease;
}

.card-description {
  display: block;
  padding: 1em 0.5em;
}

.card-description > h2 {
  margin: 0 0 0.5em;
}

.card-description > p {
  margin: 0;
}
a.card-description{
  text-decoration: none;
  color: #4b4b4b;
}
</style>