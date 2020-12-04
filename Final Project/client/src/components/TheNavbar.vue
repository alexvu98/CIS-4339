<template>
    <div class="navbar">  
        <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/createPost">Add Book</router-link></li>
            <li><router-link to="/viewPosts">View Books</router-link></li>
            <li><router-link to="/faq">FAQ</router-link></li>
            <div class="user">
              <li><router-link to="/registration">Register</router-link></li>
              <li><router-link to="/login">Login</router-link></li>
            </div>
        </ul>
    </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data () {
        return{

        }
    }
}
</script>
<style>

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.user {
  float: right;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>