<template>
  <div>
    <form>
      <div class="container">
        <h1>Login</h1>
        <p>Please fill in this form to create an account.</p>

        <label for="username"><b>Username</b></label>
        <input
          type="text"
          v-model="formData.username"
          name="username"
          placeholder="Enter Username"
          required
        />

        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          v-model="formData.password"
          name="psw"
          required
        />
        <p>
          By creating an account you agree to our
          <a href="#" style="color: dodgerblue">Terms & Privacy</a>.
        </p>

        <div class="clearfix">
          <button type="submit" class="btn" @click="Login">Login</button>
          <p>username : {{ this.$store.state.username }}</p>
          <!-- <p>email : {{ this.$store.state.email }}</p> -->
          <!-- <p>phone : {{ this.$store.state.phone }}</p> -->
          <p>password : {{ this.$store.state.password }}</p>
          <!-- <p>cpassword : {{ this.$store.state.cpassword }}</p> -->
          <!-- <p>gender : {{ this.$store.state.gender }}</p> -->
          <!-- <p>countrycode : {{ this.$store.state.countrycode }}</p> -->
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    Login(e) {
      e.preventDefault();
      if (!this.formData.username == "" && !this.formData.password == "") {
        this.$store.commit("LOGIN", this.formData);
        console.log("data", this.formData);
      } else {
        console.log("breakkkk");
      }
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap");

body {
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  background-color: #f7f7f7;
}
* {
  box-sizing: border-box;
  margin: 0;
}

/* Add padding to container elements */
.container {
  padding: 20px;
  width: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  border-radius: 10px;
  background: white;
  -webkit-box-shadow: 2px 1px 21px -9px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 2px 1px 21px -9px rgba(0, 0, 0, 0.38);
  box-shadow: 2px 1px 21px -9px rgba(0, 0, 0, 0.38);
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f7f7f7;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
}
.phone {
  width: 18%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f7f7f7;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
}
.gender {
  width: 100%;
  height: 30px;
  margin: 10px 0;
  background: #f7f7f7;
}

input[type="phone"] {
  width: 81%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f7f7f7;
}

input[type="text"]:focus,
input[type="password"]:focus,
input[type="phone"]:focus,
select:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for all buttons */
button {
  background-color: #0eb7f4;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  font-size: 16px;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  border-radius: 10px;
}

button:hover {
  opacity: 1;
}

/* Change styles for signup button on extra small screens */
@media screen and (max-width: 300px) {
  .signupbtn {
    width: 100%;
  }
}

.youtubeBtn {
  position: fixed;
  right: 20px;
  transform: translatex(-50%);
  top: 20px;
  cursor: pointer;
  transition: all 0.3s;
  vertical-align: middle;
  text-align: center;
  display: inline-block;
  background: #000;
  padding: 2px 10px;
  border-radius: 5px;
}
.youtubeBtn i {
  font-size: 20px;
  float: left;
}
.youtubeBtn a {
  color: #ff0000;
  animation: youtubeAnim 1000ms linear infinite;
  float: right;
}
.youtubeBtn a:hover {
  color: #c9110f;
  transition: all 0.3s ease-in-out;
}
.youtubeBtn i:active {
  transform: scale(0.9);
  transition: all 0.3s ease-in-out;
}
.youtubeBtn span {
  font-family: "Lato";
  font-weight: bold;
  color: #fff;
  display: block;
  font-size: 12px;
  float: right;
  line-height: 20px;
  padding-left: 5px;
}

@keyframes youtubeAnim {
  0%,
  100% {
    color: #c9110f;
  }
  50% {
    color: #ff0000;
  }
}
</style>