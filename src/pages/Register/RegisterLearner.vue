<template>
  <div class="col-md-12 row d-flex justify-content-center ">
    <div class="col-md-7 d-flex containerField inputs">
      <select
      v-model="role" 
      @change="roleSelect">
        <option value="Learner">Learner</option>
        <option value="Tutor">Tutor</option>
        <option value="Tutoring Center">Tutoring Center</option>
      </select>
      <div class="col-md-12 d-flex input">
        <i class="bi bi-envelope-at-fill"></i>
        <input type="text" placeholder="Learner's Email" 
        v-model="learnerEmail">
      </div>
        <div class="col-md-12 d-flex input">
        <i class="bi bi-person-fill-up"></i>
        <input type="text" placeholder="Learner's First Name" 
        v-model="learnerFirstname">
      </div>

      <div class="col-md-12 d-flex input">
        <i class="bi bi-person-fill-down"></i>
        <input type="text" placeholder="Learner's Last Name" 
        v-model="learnerLastName">
      </div>

      <div class="col-md-12 d-flex input">
        <i class="bi bi-person-badge-fill"></i>
        <input type="text" placeholder="Guardian / Parent's Full Name" 
        v-model="learnerGuardianName">
      </div>

      <div class="col-md-12 d-flex input">
        <i class="bi bi-envelope-at-fill"></i>
        <input type="text" placeholder="Guardian / Parent's Email" 
          v-model="learnerGuardianEmail">
      </div>

      <div class="col-md-12 d-flex input">
        <i class="bi bi-telephone-plus-fill"></i>
        <input type="text" placeholder="Contact Number" 
          v-model="learnerContact">
      </div>

      <div class="col-md-12 d-flex input">
        <i class="bi bi-house-door-fill"></i>
        <input type="text" placeholder="Address" 
          v-model="learnerAddress">
      </div>

      <div class="col-md-12 d-flex input">
        <i class="bi bi-cake-fill"></i>
        <input type="date" placeholder="Birthdate" 
          v-model="learnerBdate"/>
      </div>

      <div class="col-md-7 d-flex input">
        <i class="bi bi-lock-fill"></i>
        <!-- text box with hidden text password -->
        <input v-show="hidePass" type="password" placeholder="Password"
          v-model="learnerPassword"
          @keyup.enter="registerClicked">
        <!-- text box with show text password -->
        <input v-show="!hidePass" type="text" placeholder="Password"
          v-model="learnerPassword"
          @keyup.enter="registerClicked">
        <!-- show password -->
        <i class="bi bi-eye eye" 
          v-show="hidePass"
          @mouseover="hidePass = !hidePass"></i>
        <!-- hide password -->
        <i class="bi bi-eye-slash eye"
          v-show="!hidePass"
          @mouseleave="hidePass = !hidePass"></i>
      </div>

      <!-- Confirm Password -->
      <div class="col-md-7 d-flex input">
        <i class="bi bi-lock-fill"></i>
        <!-- text box with hidden text password -->
        <input v-show="hidePass" type="password" placeholder="Confirm Password"
          v-model="password2"
          @keyup.enter="registerClicked">
        <!-- text box with show text password -->
        <input v-show="!hidePass" type="text" placeholder="Confirm Password"
          v-model="password2"
          @keyup.enter="registerClicked">
        <!-- show password -->
        <!-- <i class="bi bi-eye eye" 
        v-show="hidePass"
        @mouseover="hidePass = !hidePass"></i> -->
        <!-- hide password -->
        <!-- <i class="bi bi-eye-slash eye"
        v-show="!hidePass"
        @mouseleave="hidePass = !hidePass"></i> -->
      </div>

      <div class="col-md-7 d-flex submit-container">
        <button type="button" class="btn btn-primary buttonLogin" 
          @click="registerClicked">
          Register
        </button>
        <router-link to="/login"
          class="btn btn-secondary buttonRegister"
          @mouseover="loginText ='Login'"
          @mouseleave="loginText ='Already Have an Account?'">
            {{ loginText }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../../router';

  export default{
    data(){
      return {
        role: "Learner",
        hidePass: true,
        loginText: 'Already Have an Account?',
        
        learnerUid: '',
        learnerEmail: '',
        learnerFirstname: '',
        learnerLastName: '',

        learnerGuardianName: '',
        learnerGuardianEmail: '',
        learnerContact: '',
        learnerAddress: '',
        learnerBdate: '',
        learnerAge: '',
        learnerPassword: '',
        password2: '',

        // learnerIdBackImage: '',
        // learnerIdFrontImage: '',
        // learnerSelfieImage: '',
      }
    },

    methods:{
      roleSelect(){
        if(this.role === "Tutor"){
          router.push('/register-tutor')
        } else if (this.role === "Tutoring Center") {
          router.push('/register-tutorcenter') 
        }
      },
      registerClicked(){
        // console.log("Register button clicked,");
        if(this.passIsEmpty()){
          console.log("Password is empty");
        } else {
          if(this.confirmPassword()){
            console.log("Password is matched");
          } else {
            console.log("Password did not match");
          }
        }
      },
      passIsEmpty(){
        if(this.learnerPassword === '' || this.password2 === '' 
           || this.learnerPassword === null || this.password2 === null){
            return true;
        } else { 
          return false;
        }
      },
      confirmPassword(){
        if( this.learnerPassword === this.password2){
          return true;
        } else {
          return false;
        }
      },
      getFields(){
        
      },
    },
  };
</script>

<style scoped>
  @import "bootstrap/dist/css/bootstrap.css";

  /* transitions */
  /* custom css */
  .containerField{
    margin-top: 3%;
    padding: 0;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    align-items: center;
    background:  #006df3;
    box-shadow: 0px 0px 50px #006df3;
  }
  .pseudoTab{
    padding-left: 3%;
    height: 6.5%;
    color: #fff;
    background: #0099ff;
  }
  .imgStud{
    position: relative;
    max-width: 33%;
    height: auto;
    position: absolute;
    top: 35%;
    left: 62%;
    pointer-events:none;
  }
    /* Input fields */
  .inputs{
    flex-direction: column;
    gap: 15px;
    padding-top: 1.3%;
  }
  .input{
    display: flex;
    align-items: center;
    margin: auto;
    width: 58%;
    min-height: 60px;
    /* width: 480px;
    height: 60px; */
    background: #eaeaea;
    border-radius: 25px;
  }
  .input input{
    background: transparent;
    border: none;
    outline: #797979;
    font-size: 1.3rem;
    width: 80%;
  }
  /* buttons */
  .submit-container{
    gap: 10%;
    padding: 1% 0% 3% 0%;
    display: flex;
    justify-content: center;
  } 
  .buttonLogin, .buttonRegister{
    width: 220px;
    height: 59px;
    border-radius: 25px;
    font-size: 1.13rem;
    font-weight: 700;    
    border: 0;
    text-decoration: none;
    text-align: center;
    text-align: center;
    line-height: 2.5;
  }
  .buttonLogin{
    color: #fff;
    background-color: #0099ff;
  }
  .buttonRegister{
    font-weight: 350;
    background: #7bcaff;
    font-size: 1.03rem;
  }
  .input i{
    margin: 0px 5%;
    font-size: 1.7rem;
    color: gray;
  }
  select{
    padding-left: 9%;
    display: flex;
    align-items: center;
    width: 58%;
    height: 50px;
    background: #0099ff;
    border-radius: 6px;
    color: #eaeaea;
    font-size: 19px;
    border: none;
  }

  .spanPhone{
      color: #3c009d;
      font-size: 19px;
      font-weight: 700;
      padding-right: 1%;
}
</style>
