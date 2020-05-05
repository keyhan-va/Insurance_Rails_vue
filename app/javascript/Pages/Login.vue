<template>
  <div class="login">
    <el-card>
      <h2>Login</h2>
      <el-form class="login-form"  ref="form" @submit.native.prevent="login">

        <el-form-item prop="email"> <el-input v-model="user.email" placeholder="E-mail"></el-input></el-form-item>
        <el-form-item prop="password"><el-input v-model="user.password" placeholder="Password" type="password"></el-input></el-form-item>
        <el-form-item><el-button :loading="loading" class="Register-button" type="primary" @click="login">Login</el-button></el-form-item>
        <router-link to="/Register"> Register</router-link>
      </el-form>
    </el-card>
  </div>
</template>



<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      loading: false,

      user:{
        email: '',
        password: '',
      },
    }
  },

  methods: {
    ...mapActions({
      signIn: 'auth/signIn'
    }),
    
    login()
    {
      this.signIn(this.user)     
         
    }
  }
  
}
</script>












// const data = {
              //     email: this.email,
              //     password: this.password,
                 
              // }

              
              // axios.post('/sign_in',{sign_in:{email:this.email,password:this.password}})
              // .then((Response)=>{
              //     localStorage.setItem('Role',Response.data.data.user.role)
              //     this.email = ''
              //     this.password = ''
              //     this.$store.commit('setUserIsAuthenticated',true)
              //     this.$store.commit('setUserRole',Response.data.data.user.role)
              //      this.$router.push('/');
              // })
              // .catch((error)=>{
              //   console.log(error);
              // })








<style scoped>
.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

.login-button {
  width: 100%;
  margin-top: 40px;
}
.login-form {
  width: 290px;
  
}
.forgot-password {
  margin-top: 10px;
}
</style>
<style lang="scss">
$teal: rgb(0, 124, 137);
.el-button--primary {
  background: $teal;
  border-color: $teal;

  &:hover,
  &.active,
  &:focus {
    background: lighten($teal, 7);
    border-color: lighten($teal, 7);
  }
}
.login .el-input__inner:hover {
  border-color: $teal;
}
.login .el-input__prefix {
  background: rgb(238, 237, 234);
  left: 0;
  height: calc(100% - 2px);
  left: 1px;
  top: 1px;
  border-radius: 3px;
  .el-input__icon {
    width: 30px;
  }
}
.login .el-input input {
  padding-left: 35px;
}
.login .el-card {
  padding-top: 0;
  padding-bottom: 30px;
}
h2 {
  font-family: "Open Sans";
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;
  padding-bottom: 20px;
}
a {
  color: $teal;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    color: lighten($teal, 7);
  }
}
.login .el-card {
  width: 340px;
  display: flex;
  justify-content: center;
}
</style>


