<template>
  <div id="Registration">
    <h1>Register Here</h1>
        <!-- Did not wrap around form because it would post credentials to the URL !-->
        <label for="email">Email</label><br>
        <input type="email" name="email" required v-model="User.email"><br>
        <label for="password">Password</label><br>
        <input type="password" name="password" required v-model="User.password"> <br>
        <input type="submit" id='submitBtn' @click="register()" value="Register"/> 
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Registration',
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
    register() {
        let user = {
            email: this.User.email,
            password: this.User.password,
        }
        // Sends object to API backend
        axios.post('http://localhost:3000/users/signup', user).then(() => {
          window.alert("Thank you for registering with BookBay!")
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
#submitBtn {
    margin-top: 20px
}

#conditions {
    width: 177px
}

h1, h2 {
  font-weight: normal;
}
</style>

