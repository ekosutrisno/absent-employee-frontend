<template>
  <div class="flex flex-col mt-5">
    <div class="flex items-start justify-between">
      <div class="flex items-start justify-start">
        <div class="w-32 h-32 rounded-full overflow-hidden">
          <img
            class="w-full h-full object-cover"
            src="https://avatars0.githubusercontent.com/u/51039205?s=460&u=cb1d242b6a9b13a3b6383e46b5410fafe471b63d&v=4"
            alt="profile-photo"
          />
        </div>
        <div>
          <span class="text-xl font-semibold ml-5 block">
            {{ employee.fullName }}
            <i
              v-if="employee.isActive"
              class="fa fa-check-circle text-sm text-green-500"
            ></i>
            <i v-else class="fa fa-check-circle text-sm text-red-500"></i>
          </span>

          <span class="text-xs font-semibold ml-5 block text-purple-600">
            ID. {{ employee.employeeId }}
          </span>
          <span class="font-semibold ml-5 mt-3 block text-blue-400">
            <i class="far fa-envelope"></i>
            {{ employee.email }}
          </span>

          <span class="font-semibold ml-5 block text-gray-700">
            <i class="fa fa-phone-volume"></i>
            {{ employee.telephone }}
          </span>
        </div>
      </div>
      <div class="px-5">
        <span
          class="font-semibold flex flex-col items-center text-green-400 uppercase"
        >
          <span>
            <i class="fa fa-award fa-2x"></i>
          </span>
          <span class="text-xl ml-2">
            {{ employee.statusEmployee }}
          </span>
        </span>
      </div>
    </div>

    <div class="h-rem-20 flex flex-wrap items-center px-4 py-4 overflow-y-auto">
      <CardPurple
        v-for="employeeInfo in employee.employeeInfo"
        :key="employeeInfo.employeeInfoId"
        :employeeInfo="employeeInfo"
      />
      <div
        v-show="k() == 0"
        class="w-full text-center p-4 cursor-pointer hover:shadow-xl h-auto mx-4 mt-6 relative bg-white rounded-lg shadow-sm border-2 border-purple-200"
      >
        <span>{{ employee.fullName }} belum pernah melakukan Absent</span>
      </div>
    </div>
  </div>
</template>

<script>
import CardPurple from "./card/CardPurple";

export default {
  props: {
    employee: {
      type: Object,
      required: true,
    },
  },
  components: {
    CardPurple,
  },
  beforeUpdate() {
    this.k()
  },
  methods: {
    k() {
      const tempInfo = this.employee.employeeInfo
        ? this.employee.employeeInfo
        : [];
      return tempInfo.length;
    },
  },
};
</script>