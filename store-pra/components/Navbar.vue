<template>
  <div>
    <h1>Navbar</h1>
    <!-- <a> <Link to="/login">Login</Link></a> -->
    <!-- <a href="/login">Login</a> -->
    <NuxtLink to="/login">Login</NuxtLink>
    <NuxtLink to="/register">Register</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>