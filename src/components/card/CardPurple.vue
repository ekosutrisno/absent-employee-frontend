<template>
  <div
    class="w-full p-4 cursor-pointer hover:shadow-xl h-auto mx-4 mt-6 relative bg-white rounded-lg shadow-sm border-2 border-purple-200"
  >
    <div
      class="absolute flex items-center justify-center top-0 left-auto w-12 h-12 bg-purple-300 rounded-lg shadow-lg -mt-4 ml-4"
    >
      <i class="fa fa-graduation-cap fa-lg text-purple-100"></i>
    </div>
    <div class="absolute hidden top-0 right-0 transform rotate-180">
    <img class="w-full h-full object-cover" src="../../assets/svg/points-amico.svg" alt="points-amico">

    </div>
    <div class="flex flex-col text-gray-800">
      <span class="text-xl font-semibold ml-20 block">
        {{ employeeInfo.createdAt | moment("dddd, MMMM Do YYYY") }}
        <i
          v-if="employeeInfo.isPresent"
          class="fa fa-check-double text-sm text-green-500"
        ></i>
        <i v-else class="fa fa-check-double text-sm text-red-500"></i>
      </span>
      <span class="text-xs font-semibold ml-20 block text-pink-600">
        INFO ID. {{ employeeInfo.employeeInfoId }}
      </span>
      <span class="font-semibold ml-5 mt-3 block text-gray-800">
        <i class="fa fa-map-marker-alt"></i>
        {{ employeeInfo.location }}
      </span>

      <div class="ml-5 mt-2 flex items-start space-x-2">
        <i class="fa fa-file-invoice text-gray-600"></i>
        <p class="w-full text-gray-600 text-sm">{{ employeeInfo.planning }}</p>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-start justify-items-start space-x-3">
          <span
            class="font-semibold ml-5 mt-8 block normal-case"
            :class="{
              'text-blue-500': employeeInfo.absentMorning > 0,
              'text-red-500 animate-bounce': employeeInfo.absentMorning == 0,
            }"
            @click="updateAbsent('absentMorning')"
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
            @click="updateAbsent('absentAfternoon')"
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
            @click="updateAbsent('absentEvening')"
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
  methods: {
    async updateAbsent(time) {
      let mo, af, ev;
      switch (time) {
        case "absentMorning":
          mo = 1;
          break;
        case "absentAfternoon":
          af = 1;
          break;
        case "absentEvening":
          ev = 1;
          break;
      }

      const data = {
        employeeId: this.employeeInfo.employeeId,
        planning: this.employeeInfo.planning,
        location: this.employeeInfo.location,
        absentMorning: mo > 0 ? mo : this.employeeInfo.absentMorning,
        absentAfternoon: af > 0 ? af : this.employeeInfo.absentAfternoon,
        absentEvening: ev > 0 ? ev : this.employeeInfo.absentEvening,
      };
      try {
        this.$store.dispatch('updateAbsent',data)
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scope>
.w-card {
  width: 25rem;
}
</style>