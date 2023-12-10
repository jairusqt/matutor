<template>
  
  <div>
    
    <input type="text" placeholder="Email">
  </div>
  <div class="col-md-12 row">
    <div class="col-md-2 border shadow">dasd</div>
    <div class="col-md-8 border shadow">asdadsa</div>
    <div class="col-md-2 border shadow">sadasd</div>
  </div>
  <div>
    <div class="col-6">
      <div>
        <label for="">Username</label>
        <input class="form-control" type="text" v-model="username">

        <label for="">Password</label>
        <input class="form-control" type="text" v-model="password">

        <button class="btn btn-primary" @click="login">Login</button>

        <select name="" id="" v-model="role" @change="roleSelect">
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return {
        user_admin: [
          {
            email: 'ytheshibe@gmail.com',
            password: '123456',
            role: '2',
            username: 'admin123' 
          }
        ],
        username: '',
        password: '',
        role:''
      }
    },
    methods: {
      login(){
        for(const user of this.user_admin){
          if(user.username === this.username || user.email === this.username && user.password === this.password){
            console.log('admin logged in')
          }
        }
      },
      roleSelect(){
        console.log(this.role);
      }
    },
    components: {
      "v-icon": OhVueIcon,
      "v-icon": ri-refresh-line
    }
  }
</script>

<style scoped>
  @import "bootstrap/dist/css/bootstrap.css";
</style>
