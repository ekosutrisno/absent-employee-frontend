<template>
  <div class="about">
    <DetailBody :employee="employee" />
  </div>
</template>
<script>
import axios from "axios";
import DetailBody from "@/components/DetailBody";

export default {
  data() {
    return {
      employee: {},
    };
  },
  components: {
    DetailBody,
  },
  async created() {
    let employeeId = this.$route.params.employeeId;
    const { data } = await axios.get(
      `http://localhost:9000/api/v1/employees/${employeeId}`
    );
    this.employee = data.data;
  },
};
</script>
