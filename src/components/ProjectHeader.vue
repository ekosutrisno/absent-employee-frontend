<template>
  <div class="flex items-center justify-between">
    <div class="relative">
      <h1 class="text-xl font-semibold">My Absent Tracking</h1>
      <div
        class="absolute top-0 right-0 -mr-5 -mt-1 rounded-full flex items-center justify-center w-4 h-4 text-xs text-gray-200 bg-red-700"
      >
        <span>1</span>
      </div>
    </div>
    <div class="flex items-center space-x-2">
      <router-link to="/" class="w-6 h-6 bg-white shadow rounded">
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </router-link>

      <router-link
        to="/"
        class="rounded-3xl inline-flex items-center text-green-700 font-medium border-2 border-green-200 bg-green-100 hover:bg-green-200 hover:text-green-800 py-1 px-3"
      >
        <i class="fa fa-sync-alt"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
   name:'ProjectHeader'
};
</script>