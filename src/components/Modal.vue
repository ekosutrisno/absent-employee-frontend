<template>
  <div
  v-if="showModal"
    class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50 bg-black"
  >
    <div
    
    @blur="showModal = !showModal"
     class="z-50 relative mx-auto my-0 max-w-lg mt-12">
      <div class="bg-white shadow overflow-hidden relative">
        <!-- Body  -->
        <div class="p-4">
          <!-- icon  -->
          <div
            class="absolute right-0 top-0 m-3 text-gray-700 hover:text-gray-600"
          >
            <i class="fa fa-close h-5 w-5 fill-current"></i>
          </div>
          <!-- Header  -->
          <div class="p-4 text-sm font-semibold uppercase text-gray-700">
            Header
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
            suscipit iste consectetur perferendis temporibus nemo possimus
            cupiditate necessitatibus quia at ullam hic nisi qui sunt, accusamus
            saepe facere excepturi praesentium.
          </div>

          <div class="p-4 text-sm font-semibold uppercase text-gray-700">
            Footer
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
  },
};
</script>

<style lang="scss" scoped>
</style>