<template>
    <div class="container">
      <ul class="card-list">
  
        <li class="card">
          <a class="card-image" href="/works/posts/miku" target="_blank" style="background-image: url(/image/i163.png);" data-image-full="/image/i163.png">
            <img src="" alt="Psychopomp" />
          </a>
          <a class="card-description" href="/works/posts/miku" target="_blank">
            <h2>Psychopomp</h2>
            <p>Japanese Breakfast</p>
          </a>
        </li>
        
        <li class="card">
          <a class="card-image" href="https://inlovewithaghost.bandcamp.com/album/lets-go" target="_blank" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/lets-go-100.jpg);" data-image-full="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/lets-go-500.jpg">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/lets-go-100.jpg" alt="let's go" />
          </a>
          <a class="card-description" href="https://inlovewithaghost.bandcamp.com/album/lets-go" target="_blank">
            <h2>let's go</h2>
            <p>In Love With A Ghost</p>
          </a>
        </li>
        
        <li class="card">
          <a class="card-image" href="https://vulfpeck.bandcamp.com/album/the-beautiful-game" target="_blank" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/beautiful-game-100.jpg);" data-image-full="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/beautiful-game-500.jpg">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/beautiful-game-100.jpg" alt="The Beautiful Game" />
          </a>
          <a class="card-description" href="https://vulfpeck.bandcamp.com/album/the-beautiful-game" target="_blank">
            <h2>The Beautiful Game</h2>
            <p>Vulfpeck</p>
          </a>
        </li>
        
        <li class="card">
          <a class="card-image" href="https://convergecult.bandcamp.com/album/jane-doe" target="_blank" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/jane-doe-100.jpg);" data-image-full="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/jane-doe-500.jpg">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/jane-doe-100.jpg" alt="Jane Doe" />
          </a>
          <a class="card-description" href="https://convergecult.bandcamp.com/album/jane-doe" target="_blank">
            <h2>Jane Doe</h2>
            <p>Converge</p>
          </a>
        </li>
        
      </ul>
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
.card-image {
  display: block;
}

.card-image > img {
  display: block;
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
  overflow: hidden;
  box-shadow: 0 0 3rem -1rem rgba(0,0,0,0.5);
  transition: transform 0.1s ease-in-out, box-shadow 0.1s;
}

.card:hover {
  transform: translateY(-0.5rem) scale(1.0125);
  box-shadow: 0 0.5em 3rem -1rem rgba(0,0,0,0.5);
}

.card-description {
  display: block;
  padding: 1em 0.5em;
  color: #515151;
}

.card-description > h2 {
  margin: 0 0 0.5em;
}

.card-description > p {
  margin: 0;
}
</style>
