<template>
  <div
    class="w-full p-4 cursor-pointer hover:shadow-xl h-auto mx-4 mt-6 relative bg-white rounded-lg shadow-sm border-2 border-purple-200"
  >
    <div
      class="absolute flex items-center justify-center top-0 left-auto w-12 h-12 bg-purple-300 rounded-lg shadow-lg -mt-4 ml-4"
    >
     <i class="fa fa-graduation-cap fa-lg text-purple-100"></i>
    </div>
    <div class="flex flex-col">
      <span class="text-xl font-semibold ml-20 block">
        {{ employeeInfo.createdAt | moment("dddd, MMMM Do YYYY") }}
        <i
          v-if="employeeInfo.isPresent"
          class="fa fa-check-circle text-sm text-green-500"
        ></i>
        <i v-else class="fa fa-check-circle text-sm text-red-500"></i>
      </span>
      <span class="text-xs font-semibold ml-20 block text-pink-600">
        INFO ID. {{ employeeInfo.employeeInfoId }}
      </span>
      <span class="font-semibold ml-5 mt-3 block">
        <i class="fa fa-map-marker-alt"></i>
        {{ employeeInfo.location }}
      </span>

      <div class="ml-5 mt-2 flex items-start space-x-2">
        <i class="fa fa-file-invoice"></i>
        <p class="w-full">{{ employeeInfo.planning }}</p>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-start justify-items-start space-x-3">
          <span
            class="font-semibold ml-5 mt-8 block normal-case"
            :class="{
              'text-blue-500': employeeInfo.absentMorning > 0,
              'text-red-500 animate-bounce': employeeInfo.absentMorning == 0,
            }"
          >
            <i class="fa fa-award fa-2x"></i>
            <span class="text-xl ml-2"> Morning </span>
          </span>
          <span
            class="font-semibold ml-5 mt-8 block normal-case"
            :class="{
              'text-blue-500': employeeInfo.absentAfternoon > 0,
              'text-red-500 animate-bounce hover:animate-none':
                employeeInfo.absentAfternoon == 0,
            }"
          >
            <i class="fa fa-award fa-2x"></i>
            <span class="text-xl ml-2"> Afternoon </span>
          </span>
          <span
            class="font-semibold ml-5 mt-8 block normal-case"
            :class="{
              'text-blue-500': employeeInfo.absentEvening > 0,
              'text-red-500 animate-bounce hover:animate-none':
                employeeInfo.absentEvening == 0,
            }"
          >
            <i class="fa fa-award fa-2x"></i>
            <span class="text-xl ml-2"> Evening </span>
          </span>
        </div>
        <span v-if="employeeInfo.modifiedAt != null" class="text-xs mr-20 mt-10"
          >Last Updated
          {{ employeeInfo.modifiedAt | moment("from", "now") }}</span
        >
      </div>
    </div>

    <div
      class="absolute flex items-center justify-center bottom-0 text-purple-700 right-0 w-12 h-12 rounded-full bg-purple-200 mr-4 -mb-3 border-2 border-purple-300"
    >
      <span class="fa fa-receipt fa-lg"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["employeeInfo"],
};
</script>
<style scope>
.w-card {
  width: 25rem;
}
</style>