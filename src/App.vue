<template>
  <div class="min-h-screen max-h-screen w-full bg-gray-100">
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
              <ContentBody />
            </div>
            <div class="flex-none w-56 p-2">lorjdkajkaksjk</div>
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
import ContentBody from "@/components/ContentBody";

export default {
  components: {
    Aside,
    TopBar,
    ProjectHeader,
    ProjectTabHeader,
    ContentBody,
  },
};
</script>