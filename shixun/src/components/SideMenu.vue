<template>
      <el-menu
      :default-active="activerouter"
      class="el-menu-vertical-demo"
      :router="true"
      style="height: 100vh"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
     >
      <el-menu-item index="/Home/FoodList">
        <i class="el-icon-menu"></i>
        <span slot="title">美食列表</span>
      </el-menu-item>
      <el-menu-item index="/Home/AddFood">
        <i class="el-icon-menu"></i>
        <span slot="title">添加美食</span>
      </el-menu-item>
    </el-menu>
</template>

<script>

    export default {
        name: "SideMenu",
      data:function () {
        return {
          activerouter:''
        }
      }
    }
</script>

<style scoped>

</style>
