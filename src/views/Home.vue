<template>
  <div class="container mx-auto pt-16 px-6">
    <Card
      v-for="employee in employees"
      :key="employee.employeeId"
      :employee="employee"
    />
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Home",
  components: {
    Card,
  },
  data: () => ({
    employees: [],
    employee: {},
    employeeInfo: {},
  }),
  async mounted() {
    const baseUrl = `http://localhost:9000/api/v1/employees/`;
    const { data } = await this.$http.get(baseUrl);
    this.employees = data.data;
  },
};
</script>
