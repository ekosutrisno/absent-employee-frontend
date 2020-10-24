<template>
  <div class="h-rem-30 flex flex-wrap items-center px-4 py-4 overflow-y-auto">
    <CardGreen v-for="n in 2" :key="n" />
    <CardPurple v-for="n in 2" :key="n" />
    <CardBlue v-for="n in 2" :key="n" />
  </div>
</template>

<script>
import CardGreen from "@/components/card/CardGreen";
import CardPurple from "@/components/card/CardPurple";
import CardBlue from "@/components/card/CardBlue";

export default {
  name: "ContentBody",
  components: {
    CardGreen,
    CardPurple,
    CardBlue,
  },
};
</script>
<style scope>
.height-content {
  height: 30rem;
}
</style>
