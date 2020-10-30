<template>
  <div class="about">
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
          <button
            @click="$modal.show('createAbsent')"
            class="rounded-3xl mt-2 focus:outline-none inline-flex items-center text-green-700 font-medium border-2 border-green-200 bg-green-100 hover:bg-green-200 hover:text-green-800 py-1 px-3"
          >
            <i class="fa fa-plus mr-2"></i>
            <span class="text-sm">Absent Today</span>
          </button>
        </div>
      </div>

      <div
        class="h-rem-20 flex flex-wrap items-center px-4 py-4 overflow-y-auto"
      >
        <CardPurple
          v-for="employeeInfo in employee.employeeInfo"
          :key="employeeInfo.employeeInfoId"
          :employeeInfo="employeeInfo"
        />
        <div
          v-show="emptyAbsent() == 0"
          class="w-full text-center p-4 cursor-pointer hover:shadow-xl h-auto mx-4 mt-6 relative bg-white rounded-lg shadow-sm border-2 border-purple-200"
        >
          <span>{{ employee.fullName }} belum pernah melakukan Absent</span>
        </div>
      </div>
      <modal name="createAbsent" :adaptive="true" :height="400" :width="300">
        <div class="bg-white shadow overflow-hidden relative h-full w-full">
          <!-- Body  -->
          <div class="p-4">
            <!-- icon  -->
            <div
              class="absolute right-0 top-0 m-3 text-gray-700 hover:text-gray-600"
            >
              <i class="fa fa-close h-5 w-5 fill-current"></i>
            </div>
            <!-- Header  -->
            <div class="p-4 text-sm font-semibold uppercase text-gray-700">
              Please Fill Your Info😻
            </div>
            <div class="w-full">
              <FormulateForm class="w-full" v-model="formValues">
                <FormulateInput
                  name="location"
                  type="text"
                  label="Your location"
                  placeholder="Your location"
                  validation="required"
                  :wrapper-class="['w-full']"
                />
                <FormulateInput
                  type="textarea"
                  name="planning"
                  label="Enter a planning in the box"
                  validation="required|max:1000,length"
                  :wrapper-class="['w-full']"
                />
                <FormulateInput
                  type="submit"
                  @click="addAbsent"
                  label="Register"
                  :disabled="disableBtn"
                />
              </FormulateForm>
            </div>
          </div>
        </div>
      </modal>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import CardPurple from "../components/card/CardPurple";

export default {
  data() {
    return {
      employee: {},
      formValues: {
        location: "",
        planning: "",
      },
    };
  },
  components: {
    CardPurple,
  },
  async beforeCreate() {
    let employeeId = this.$route.params.employeeId;
    const { data } = await axios.get(
      `http://localhost:9000/api/v1/employees/${employeeId}`
    );
    this.employee = data.data;
  },
  computed: {
    disableBtn() {
      return this.formValues.location == "" || this.formValues.planning == ""
        ? true
        : false;
    },
  },
  beforeUpdate() {
    this.emptyAbsent();
  },
  methods: {
    emptyAbsent() {
      const tempInfo = this.employee.employeeInfo
        ? this.employee.employeeInfo
        : [];
      return tempInfo.length;
    },

    async loadEmployee() {
      let employeeId = this.$route.params.employeeId;
      const { data } = await axios.get(
        `http://localhost:9000/api/v1/employees/${employeeId}`
      );
      this.employee = data.data;
    },

    async addAbsent() {
      const data = {
        employeeId: this.employee.employeeId,
        planning: this.formValues.planning,
        location: this.formValues.location,
        absentMorning: 1,
        absentAfternoon: 0,
        absentEvening: 0,
      };
      try {
        await axios.post(`http://localhost:9000/api/v1/info`, data);
        this.loadEmployee();
        this.$modal.hide("createAbsent");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
