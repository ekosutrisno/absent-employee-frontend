<template>
  <div class="h-rem-30 flex flex-wrap items-center px-4 py-4 overflow-y-auto">
    <CardGreen
      v-for="employee in employees"
      :key="employee.employeeId"
      :employee="employee"
    />
  </div>
</template>

<script>
import axios from "axios";
import CardGreen from "@/components/card/CardGreen";

export default {
  name: "ContentBody",
  data() {
    return {
      employees: [],
    };
  },
  components: {
    CardGreen,
  },
  async mounted() {
    const { data } = await axios.get(`http://localhost:9000/api/v1/employees/`);
    this.employees = data.data;
  },
};
</script>


<style scope>
.height-content {
  height: 30rem;
}
</style>
