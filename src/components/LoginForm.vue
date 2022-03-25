<template>
  <div id="login-form">
    <form method="POST" @submit.prevent="handleSubmit">
      <label for="username">Username</label>
      <input type="text" name="username" id="username" v-model="u.username" />
      <label for="password">Password</label>
      <input type="text" name="password" id="password" v-model="u.password" />
      <input type="submit" value="Login" />
    </form>
    <p id="login-response">{{ error }}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    async handleSubmit() {
      await axios({
        method: "post",
        url: " https://apibus.quidam.re/api/login_check ",
        data: {
          username: this.u.username,
          password: this.u.password,
        },
      })
        .then((response) => {
          console.log(response);
          this.error = response.message;
          if (response.data.token) {
            sessionStorage.clear("token");
            sessionStorage.setItem("token", response.data.token);
            this.$router.push("/buses");
          }
        })
        .catch((e) => console.log(e));
    },
  },
  name: "LoginForm",
  data() {
    return {
      u: {
        username: "",
        password: "",
      },
      error: "",
    };
  },
};
</script>
<style scoped>
#login-response {
  font-size: 14px;
  color: #ee2020;
}
form {
  position: relative;
  margin: 0 auto;
  width: fit-content;
  border: 1px solid #41b883;
  padding: 0.8em;
  border-radius: 8px;
}
label {
  display: block;
}
input {
  display: block;
  height: 40px;
  background-color: transparent;
  border: 1px solid #34495e;
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 8px;
  color: rgb(195, 192, 205);
  margin-left: auto;
  margin-right: auto;
}
input[type="submit"] {
  background-color: #41b883;
  color: black;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5em;
  margin-top: 1em;
}
input:focus-within {
  outline-color: green;
  box-shadow: 0 0 0 4 #41b883;
}
</style>
