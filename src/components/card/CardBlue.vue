<template>
   <div
      class="w-rem-25 cursor-pointer hover:shadow-xl h-48 mx-4 mt-6 relative bg-white rounded-lg shadow-sm border-2 border-blue-200"
    >
      <div
        class="absolute flex items-center justify-center top-0 left-auto w-12 h-12 bg-blue-300 rounded-lg shadow-lg -mt-4 ml-4"
      >
        <svg
        class="w-8 h-8 text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div class="absolute flex items-center justify-center bottom-0  text-blue-700 right-0 w-12 h-12 rounded-full bg-blue-200 mr-4 -mb-3 border-2 border-blue-300">
        <span>Pagi</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "Card",
  props: ["employee"],
  computed: {
    employeeInfo: function () {
      return this.employee.employeeInfo[0];
    },
  },
};
</script>
<style scope>
.w-card {
  width: 25rem;
}
</style>