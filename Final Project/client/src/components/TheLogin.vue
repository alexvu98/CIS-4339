<template>
  <div id="Login">
    <h1>Login Here</h1>
        <label for="email">Email</label><br>
        <input type="email" name="email" required v-model="User.email"><br>
        <label for="password">Password</label><br>
        <input type="password" name="password" required v-model="User.password"> <br>
        <input id='loginBtn' type="submit" @click="login()" value="Login">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
        // User object to be put into MongoDB
        User: {
            email: '',
            password: ''
        }
    }
  },
  methods: {
    // Method to create a new user
    login() {
        let user = {
            email: this.User.email,
            password: this.User.password,
        }
        // Sends object to API backend
        axios.post('http://localhost:3000/users/login', user).then((result) => {
            console.log(result)
            window.alert("Login Successful!")
        }).catch ((error) => {
            console.log(error)
        })
    }
  }
}
</script>

<style>

#CreatePosts {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#loginBtn {
    margin-top: 20px
}

h1, h2 {
  font-weight: normal;
}
</style>

