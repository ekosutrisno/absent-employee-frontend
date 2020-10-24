<template>
   <div class="border-b-2 border-gray-300">
      <div class="flex items-center justify-start space-x-3 py-4">
         <router-link to="/" class="font-semibold text-sm focus:text-green-500">To day</router-link>
         <router-link to="/" class="font-semibold text-sm focus:text-green-500">All Day</router-link>
      </div>
   </div>
</template>

<script>
   export default {
      name:'ProjectTabHeader'
   }
</script>