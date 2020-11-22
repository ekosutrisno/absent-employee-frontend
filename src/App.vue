<template>
  <div class="min-h-screen max-h-screen w-full bg-gray-100 font-absent">
    <!-- Wrapper Section -->
    <div class="container mx-auto flex">
      <!-- Aside  -->
      <div class="flex flex-none w-32 h-full">
        <Aside />
      </div>
      <!-- Main Warpper  -->
      <div class="flex flex-col flex-1 h-full">
        <!-- Top Nav Bar  -->
        <div class="flex flex-none h-full">
          <TopBar />
        </div>
        <!-- Content Section  -->
        <div class="flex flex-col flex-1">
          <div class="flex">
            <div class="flex-1 mt-4">
              <ProjectHeader />
              <ProjectTabHeader />
              <router-view></router-view>
            </div>
            <div class="flex-none w-56 p-2">
              <div class="flex flex-col p-2">
                <div class="w-full h-full cursor-pointer transition-all duration-200 p-4 bg-green-50 border-2 border-green-200 hover:border-green-300 rounded-md">
                  <span class="text-xs bg-green-100 border-2 border-green-200 font-semibold text-green-600 w-auto px-2 py-1 rounded-2xl text-lef">Date</span>
                  <h1 class="text-xl font-light text-green-300 text-center mb-1">{{new Date() | moment("dddd")}}</h1>
                  <h1 class="text-6xl font-semibold text-green-400 text-center"> {{new Date() | moment("D")}} </h1>
                  <h1 class="text-xl font-light text-green-300 text-center mb-2">{{new Date() | moment("MMMM YYYY")}} </h1>
                  <span class="text-xs bg-green-100 border-2 border-green-200 font-semibold text-green-600 w-auto px-2 py-1 rounded-2xl text-lef">Time</span>
                  <h1 class="text-3xl font-semibold text-green-400 text-center mt-2">{{new Date() | moment("h:mm:ss")}}</h1>
                </div>
                <img src="../src/assets/svg/Secure data-bro.svg" alt="team2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "@/components/Aside";
import TopBar from "@/components/TopBar";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectTabHeader from "@/components/ProjectTabHeader";

export default {
  components: {
    Aside,
    TopBar,
    ProjectHeader,
    ProjectTabHeader,
  },
  beforeMount() {
    this.$store.dispatch('loadEmployees')
  },
};
</script>