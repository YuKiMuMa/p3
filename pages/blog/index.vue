<template>
    <div class="container">
      <ul class="card-list">
  
        <li class="card">
          <a class="card-image" href="/blog/posts/test">
            <img src="/image/i163.png" alt="Psychopomp" />
          </a>
          <a class="card-description" href="/blog/posts/test" >
            <h2>ゆきむま～？</h2>
            <p>06.27.2021</p>
          </a>
        </li>
        
        <li class="card">
          <a class="card-image" href="/blog/posts/filter">
            <img src="/image/i163.png" alt="Psychopomp" />
          </a>
          <a class="card-description" href="/blog/posts/filter" >
            <h2>Psychopomp</h2>
            <p>Japanese Breakfast</p>
          </a>
        </li>
        
        <li class="card">
          <a class="card-image" href="/blog/posts/test">
            <img src="/image/i163.png" alt="Psychopomp" />
          </a>
          <a class="card-description" href="/blog/posts/test" >
            <h2>Psychopomp</h2>
            <p>Japanese Breakfast</p>
          </a>
        </li>

        <li class="card">
          <a class="card-image" href="/blog/posts/test">
            <img src="/image/i163.png" alt="Psychopomp" />
          </a>
          <a class="card-description" href="/blog/posts/test" >
            <h2>Psychopomp</h2>
            <p>Japanese Breakfast</p>
          </a>
        </li>

        <li class="card">
          <a class="card-image" href="/blog/posts/test">
            <img src="/image/i163.png" alt="Psychopomp" />
          </a>
          <a class="card-description" href="/blog/posts/test" >
            <h2>Psychopomp</h2>
            <p>Japanese Breakfast</p>
          </a>
        </li>

        <li class="card">
          <a class="card-image" href="/blog/posts/test">
            <img src="/image/i163.png" alt="Psychopomp" />
          </a>
          <a class="card-description" href="/blog/posts/test" >
            <h2>Psychopomp</h2>
            <p>Japanese Breakfast</p>
          </a>
        </li>
        
      </ul>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
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
}

.card:hover {
  transform: translateY(-0.5rem) scale(1.0125);
  box-shadow: 0 0.5em 3rem -1rem rgba(0,0,0,0.5);
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
