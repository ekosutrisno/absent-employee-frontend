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
import CardGreen from "@/components/card/CardGreen";
import { mapState } from "vuex";

export default {
  name: "ContentBody",
  computed: {
    ...mapState({
      employees: (state) => state.employees,
    }),
  },
  components: {
    CardGreen,
  },
};
</script>


<style scope>
.height-content {
  height: 30rem;
}
</style>
