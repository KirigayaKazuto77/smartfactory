<template>
  <div>
    <Navbar/>
    <div style="padding-left:16px">
      <h2>About Page</h2>
      <p>Some content..</p>
    </div>
  </div>
</template>

<script>

// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'About',
  components: {
    Navbar
  }
}

</script>
