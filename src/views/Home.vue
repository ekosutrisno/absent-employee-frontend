<template>
  <div class="container mx-auto pt-16 px-6">
   
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
  },
  data: () => ({
    employees: [],
    employee: {},
    employeeInfo: {},
  }),
  // async mounted() {
  //   const baseUrl = `http://localhost:9000/api/v1/employees/`;
  //   const { data } = await this.$http.get(baseUrl);
  //   this.employees = data.data;
  // },
};
</script>
