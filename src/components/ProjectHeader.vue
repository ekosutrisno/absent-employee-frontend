<template>
  <div class="flex items-center justify-between">
    <div class="relative">
      <h1 class="text-xl font-semibold">My Absent Tracking</h1>
      <div
        class="absolute top-0 right-0 -mr-12 -mt-1 rounded-full flex items-center justify-center w-auto px-1 h-4 text-xs text-gray-200 bg-green-500"
      >
        <span>v0.0.1</span>
      </div>
    </div>
    <div class="flex items-center space-x-2">
      <router-link to="/" 
        class="rounded-3xl text-xs inline-flex items-center focus:outline-none text-green-500 font-medium border-2 border-green-200 bg-green-100 hover:bg-green-200 hover:text-green-800 py-1 px-3"
      >
      <i class="fa fa-star"> {{ allEmployees}}</i>
      </router-link>

      <button
        @click="$store.dispatch('loadEmployees')"
        class="rounded-3xl inline-flex items-center focus:outline-none text-green-700 font-medium border-2 border-green-200 bg-green-100 hover:bg-green-200 hover:text-green-800 py-1 px-3"
      >
        <i class="fa fa-sync-alt text-xs"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
   name:'ProjectHeader',
   computed: {
     ...mapGetters({
       allEmployees: 'allEmployees'
     })
   },
};
</script>