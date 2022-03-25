<template>
  <div id="login-view">
    <h1>Login form</h1>
    <p>Happy to see you again</p>
    <LoginForm></LoginForm>
  </div>
</template>
<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
};
</script>
<style scoped>
h1,
p {
  text-align: center;
}
</style>
