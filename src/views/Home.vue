<template>
  <div class="home">
    <Navbar/>

    <section id="sec1" style="height: 100vh; background: lightblue">Seção 1</section>
    <section id="sec2" style="height: 100vh; background: lightgreen">Seção 2</section>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',

  components: {
    Navbar
  }
}
</script>
