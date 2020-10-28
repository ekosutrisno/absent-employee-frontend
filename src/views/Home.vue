<template>
  <div class="flex">
    <div class="flex-1 mt-4">
      <ContentBody />
    </div>
  </div>
</template>

<script>
import ContentBody from "@/components/ContentBody";

export default {
  name: "Home",
  components: {
    ContentBody,
  },
};
</script>
