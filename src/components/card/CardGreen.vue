<template>
  <router-link
    :to="`/about/${employee.employeeId}`"
    class="w-rem-25 text-gray-800 cursor-pointer hover:shadow-xl h-56 mx-4 mt-6 relative bg-white rounded-lg shadow-sm border-2 border-transparent hover:border-green-200 transition-all duration-200 ease-in-out"
  >
    <div
      class="absolute flex items-center justify-center top-0 left-auto w-12 h-12 bg-green-300 rounded-lg shadow-lg -mt-4 ml-4"
    >
      <i class="fa fa-tags fa-lg text-gray-100"></i>
    </div>

    <div class="flex flex-col">
      <span class="text-xl font-semibold ml-20 block">
        {{ employee.fullName }}
        <i
          v-if="employee.isActive"
          class="fa fa-check-circle text-sm text-green-500"
        ></i>
        <i v-else class="fa fa-check-circle text-sm text-red-500"></i>
      </span>
      <span class="text-xs font-semibold ml-20 block">
        ID. {{ employee.employeeId }}
      </span>
      <span class="text-xs font-semibold ml-20 block">
        REG DATE. {{ employee.createdAt | moment("dddd, MMMM Do YYYY") }}
      </span>
      <span class="text-xs font-semibold ml-20 mt-2 block">
        <i class="text-xs rounded px-1 bg-purple-200"> {{ employee.createdAt | moment("from","now") }}</i>
      </span>
      <span class="font-semibold ml-5 mt-3 block">
        <i class="far fa-envelope"></i>
        {{ employee.email }}
      </span>

      <span class="ml-5 block">
        <i class="fa fa-phone-volume"></i>
        {{ employee.telephone }}
      </span>

      <span class="font-semibold ml-5 mt-6 block text-blue-500 uppercase">
        <i class="fa fa-award fa-2x"></i>
        <span class="text-xl ml-2">
          {{ employee.statusEmployee }}
        </span>
      </span>
    </div>

    <div
      class="absolute flex items-center justify-center bottom-0 text-green-700 right-0 w-12 h-12 rounded-full bg-green-200 mr-4 -mb-3 border-2 border-green-300"
    >
      <span class="fa fa-user-tie fa-lg"></span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: {
    employee: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scope>
.w-card {
  width: 25rem;
}
</style>