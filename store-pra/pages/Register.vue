<template>
  <body>
    <!-- <form @submit="addData">
      <label for="name">Name</label>
      <input type="text" placeholder="Enter Name" v-model="name" />
      <label for="email">Email</label>
      <input type="email" placeholder="Enter Email" v-model="email" />
      <label for="password">Password</label>
      <input type="password" placeholder="Enter Password" v-model="password" />
      <label for="cpassword">Confirm password</label>
      <input
        type="password"
        placeholder="Enter Confirm Password"
        v-model="cpassword"
      />
      <label for="username">Username</label>
      <input type="text" placeholder="Enter username" v-model="username" />
      <label for="phone">Phone</label>
      <input type="phone" placeholder="Enter phone number" v-model="phone" />
      <button type="submit">Submit</button>
    </form> -->
    <form>
      <div class="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>

        <label for="username"><b>Username</b></label>
        <input
          type="text"
          v-model="formData.username"
          name="username"
          placeholder="Enter Username"
          required
        />
        <label for="email"><b>Email</b></label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          required
          v-model="formData.email"
        />

        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          v-model="formData.password"
          name="psw"
          required
        /><label for="psw"><b>Confirm Password</b></label>
        <input
          type="password"
          v-model="formData.cpassword"
          placeholder="Enter Confirm Password"
          name="psw"
          required
        />
        <label for="gender"> <b>Select you gender</b></label> <br />
        <select name="gender" class="gender" v-model="formData.selectedgender">
          <option value="none" selected>{{ formData.selectedgender }}</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">other</option>
        </select>
        <br />

        <label for="phone"><b>Phone Number</b></label>
        <br />
        <select
          name="phoneCode"
          class="phone"
          required
          v-model="formData.selectedcountrycode"
        >
          <option selected hidden value="">
            {{ formData.selectedcountrycode }}
          </option>
          <option value="+98">+98</option>
          <option value="+99">+99</option>
          <option value="+90">+90</option>
          <option value="+66">+66</option>
        </select>
        <input
          type="phone"
          name="phone"
          v-model="formData.phone"
          placeholder="812345678"
          required
        />

        <p>
          Already signup!
          <NuxtLink to="/login"><span>Login</span></NuxtLink>
        </p>

        <div class="clearfix">
          <button type="submit" class="btn" @click="addData">Sign Up</button>
          <p>username : {{ this.$store.state.username }}</p>
          <p>email : {{ this.$store.state.email }}</p>
          <p>phone : {{ this.$store.state.phone }}</p>
          <p>password : {{ this.$store.state.password }}</p>
          <p>cpassword : {{ this.$store.state.cpassword }}</p>
          <p>gender : {{ this.$store.state.gender }}</p>
          <p>countrycode : {{ this.$store.state.countrycode }}</p>
        </div>
      </div>
    </form>
  </body>
</template>
<script>
export default {
  name: "Form",
  data() {
    return {
      formData: {
        email: "",
        username: "",
        password: "",
        cpassword: "",
        phone: "",
        selectedgender: "male",
        selectedcountrycode: "+99",
      },
    };
  },
  methods: {
    addData(e) {
      e.preventDefault();
      if (
        this.formData.email == "" ||
        this.formData.username == "" ||
        this.formData.password == "" ||
        this.formData.cpassword == "" ||
        this.formData.phone == ""
      ) {
        console.log("enter all fields");
      } else {
        {
          if (this.formData.password === this.formData.cpassword) {
            this.$store.commit("REGISTER", this.formData);
          } else {
            console.log("passowrd not match");
          }
        }
      }

      console.log("data", this.formData);
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
  height: 37px;
  margin: 10px 0;
  border: none;
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
