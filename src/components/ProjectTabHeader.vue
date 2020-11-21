<template>
  <div class="divide-y-2 divide-dashed divide-solid divide-gray-300">
    <div class="flex items-center justify-start space-x-3 py-2">
      <router-link
        to="/"
        class="rounded-3xl text-xs inline-flex items-center focus:outline-none text-green-700 font-medium border-2 border-green-200 bg-green-100 hover:bg-green-200 hover:text-green-800 py-1 px-3">
        <i class="fa fa-th mr-2"></i>
         <span>All day</span>
        </router-link>
      <router-link
        to="/"
        class="rounded-3xl text-xs inline-flex items-center focus:outline-none text-green-700 font-medium border-2 border-green-200 bg-green-100 hover:bg-green-200 hover:text-green-800 py-1 px-3">
        <i class="fa fa-folder-minus mr-2"></i>
         <span>Archive  </span>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectTabHeader",
};
</script>