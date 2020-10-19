<template>
  <div class="min-h-screen w-full bg-green-100">
    <div class="container mx-auto max-w-6xl min-h-screen bg-green-300">
      <NavTop />
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavTop from "./components/NavTop";

export default {
  components: {
    NavTop,
  },
};
</script>