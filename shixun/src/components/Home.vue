<template>
  <el-container>
    <el-aside width="200px">

      <side-menu></side-menu>
    </el-aside>
    <el-container>
      <el-header>头部</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
    import SideMenu from "./SideMenu";
    export default {
        name: "Home",
      components: {SideMenu}
    }
</script>

<style scoped>

</style>
