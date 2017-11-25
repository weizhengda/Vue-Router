<template>
  <div>
      <h2>this is news page</h2>
      <router-link to="/news/art">art</router-link>
      <router-link to="/news/play">play</router-link>
      <router-link to="/news/music">music</router-link>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>