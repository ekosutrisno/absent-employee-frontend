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
                <img src="../src/assets/svg/Team spirit-bro.svg" alt="team1" />
                <img src="../src/assets/svg/Team-amico.svg" alt="team2" />
                <img src="../src/assets/svg/Realtor-bro.svg" alt="team3" />
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
};
</script>