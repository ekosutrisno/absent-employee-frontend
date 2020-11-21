import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      employees: [],
      employee: {}
   },
   mutations: {
      SET_EMPLOYEES: (state, employees) => (state.employees = employees),
      SET_EMPLOYEE: (state, employee) => (state.employee = employee)
   },
   getters: {
      allEmployees: state => state.employees.length
   },

   actions: {
      async loadEmployees({ commit }) {
         const { data } = await axios.get(`http://localhost:9000/api/v1/employees`);
         commit("SET_EMPLOYEES", data.data);
      },

      async loadEmployee({ commit }, employeeId) {
         const { data } = await axios.get(`http://localhost:9000/api/v1/employees/${employeeId}`);
         commit("SET_EMPLOYEE", data.data);
      },

      async addAbsent({ dispatch }, absentData) {
         await axios.post(`http://localhost:9000/api/v1/info`, absentData);
         dispatch('loadEmployee', absentData.employeeId)
      },

      async updateAbsent({ dispatch }, absentData) {
         await axios.put(`http://localhost:9000/api/v1/info/${absentData.employeeId}`, absentData);
         dispatch('loadEmployee', absentData.employeeId)
      }

   }
});