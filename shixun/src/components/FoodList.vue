<template>
  <el-card>
    <el-breadcrumb separator-class="el-icon-arrow-right" slot="header">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>美食列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      v-loading="loading"
      :data="foods"
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="标识"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="食物名"
        >
      </el-table-column>
      <el-table-column
        prop="tast"
        label="口味"
      >
      </el-table-column>
      <el-table-column
        label="操作"
      >
        <template slot-scope="scope">
          <el-button type="text" @click.native.prevent="modidy(scope.$index,scope.row)" size="small">编辑</el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.$index,scope.row)"
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
    export default {
        name: "FoodList",
      data(){
          return{
            foods:[],
            loading:false
          }
      },
      methods:{
        updata:function () {
          this.$axios('/foods')//代替http://localhost:3000/getNewsList
            .then((res) => {
              //alert(res.data);
              this.foods = res.data
            }, (err) => {
              console.log(err)
            })
        },
        deleteRow(index,row){
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$axios.delete('/foods/'+row.id)//代替http://localhost:3000/food
              .then((res) => {
                this.foods.splice(index,1)
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              }, (err) => {
                console.log(err)
              })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });

        },
        modidy(index,row){
          this.$router.push('ModifyFood/'+row.id )

        }
      },
      created(){
        this.loading=true;
        this.updata();
        setTimeout(()=>{this.loading=false;},600);
      }
    }
</script>

<style scoped>

</style>
