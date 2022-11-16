<!-- Please remove this file from your project -->
<template>
  <div>
    <Navbar />
    <!-- <Form /> -->
    <!-- <h1>{{ FormName }}</h1>
    <input
      v-model="name"
      type="text"
      placeholder="enter name"
      @keypress.enter="addName"
    />
    <button @click="addName">Submit</button>
    <h1>Name : {{ this.$store.state.name }}</h1> -->
  </div>
</template>

<script>
// console.log("store", this.store);
export default {
  name: "NuxtTutorial",
  data() {
    return {
      name: "",
      FormName: "UserRegister",
    };
  },
  // mounted() {
  //   console.log("store", this.$store.state.counter);
  //   console.log("name", this.$store.state.name);
  // },
  methods: {
    addName() {
      console.log("clicked");
      this.$store.commit("ADD_NAME", this.name);
      console.log("data", this.$store.state.name);
      // this.name = "";
    },
  },
};
</script>
<style>
/* .container {
  text-align: center;
} */
</style>
