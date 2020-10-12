<template>
  <el-card>
    <el-breadcrumb separator-class="el-icon-arrow-right" slot="header">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>发布美食</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  label-width="100px" class="demo-ruleForm">
      <el-form-item label="美食名称" prop="name">
        <el-input style="width: 40%" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="美食口味">
        <el-select v-model="ruleForm.tast" placeholder="请选择口味">
          <el-option label="咸淡适中" value="咸淡适中"></el-option>
          <el-option label="甜咸清淡" value="甜咸清淡"></el-option>
          <el-option label="清淡" value="清淡"></el-option>
          <el-option label="尚咸" value="尚咸"></el-option>
          <el-option label="麻辣" value="麻辣"></el-option>
          <el-option label="酸辣" value="酸辣"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
         <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
    export default {
        name: "AddFood",
      data() {
        var check = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('名称不能为空'));
          }else {
            return callback()
          }
        };
        return {
          ruleForm: {
            id:'',
            name: '',
            tast:'咸淡适中'
          },
          rules: {
            name: [
              {validator:check, trigger: 'blur'},
            ]
          }
        }
      },
      methods:{
        submitForm(ruleForm){
          this.$refs[ruleForm].validate((valid) => {
              if (valid) {
                if (this.$route.params.id!=undefined){
                  this.modify(this.ruleForm.id)
                }else {
                  this.add()
                }
              } else {
                console.log('error submit!!');
                return false;
              }
        })
        },
        modify(id){
          this.$axios.put('/foods/'+id,this.ruleForm)
            .then((res) => {
              this.$router.push('/Home/Foodlist')
          }, (err) => {
            console.log(err)
          })
        },
        add(){
          this.$axios.post('/foods/',this.ruleForm)
            .then((res) => {
              this.$router.push('/Home/Foodlist')
            }, (err) => {
              console.log(err)
            })
        }
      },
      created(){
          var id=this.$route.params.id;
          if(id!=undefined){
            this.$axios('/foods/'+id).then((res) => {
              //alert(res.data);
              this.ruleForm.id= res.data.id;
              this.ruleForm.name=res.data.name;
            }, (err) => {
              console.log(err)
            })
          }
      }
    }
</script>

<style scoped>

</style>
