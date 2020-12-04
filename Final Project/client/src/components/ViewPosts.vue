<template>
  <div id="ViewPosts">
      <h1>Books for Sale</h1>
      <table class="container">
        <tr>
          <th>Author</th>
          <th>Title</th>
          <th>Price</th>
          <th>Condition</th>
          <th>Contact Info</th>
          <th>Action</th>
        </tr>

        <tr v-for="post in posts" :key="post._id">
          <td> {{post.author}} </td>
          <td> {{post.title}} </td>
          <td> {{'$' + post.price}} </td>
          <td> {{post.condition}} </td>
          <td> {{post.contactInfo}} </td>
          <td>
            <button id='view' v-on:click="viewPost(post._id)"> View </button>
            <button id='edit' v-on:click="editPost(post._id)"> Edit </button>
            <button id='delete' v-on:click="deletePost(post._id)"> Delete </button>
          </td>
        </tr>

      </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ViewPosts',
  data () {
    return {
      posts: [],
      selectedPost: []
    }
  },
  // Call API on render to get ALL posts
  created() {
      axios.get('http://localhost:3000/posts/').then(response =>{
      console.log(response)
      this.posts = response.data
    }).catch((error) =>{
      console.log(error)
    })
  },
  methods: {
    // Method to get posts
    getPosts() {
      axios.get('http://localhost:3000/posts/').then(response =>{
      this.posts = response.data
    }).catch((error) =>{
      console.log(error)
    })
    },
    // Method to view posts in more detail
    viewPost(id) {
      axios.get('http://localhost:3000/posts/' + id).then((response) => {
        this.selectedPost = response.data
        // Transfers axios data to ViewDetailedPost route
        this.$router.push({name: 'ViewDetailedPost', params: { data: this.selectedPost}})
      }).catch((error) => {
        console.log(error)
      })
    },
    // Method to get post for edit
    editPost(id) {
      axios.get('http://localhost:3000/posts/' + id).then((response) => {
        this.selectedPost = response.data
        // Transfers axios data to EditPost route
        this.$router.push({name: 'EditPost', params: { data: this.selectedPost}})
      }).catch((error) => {
        console.log(error)
      })
    },
    // Method to delete posts 
    deletePost(id) {
      axios.delete('http://localhost:3000/posts/' + id).then(() => {
        // This will re-get all the posts on the page so that the user will not have to refresh the page to see changes
        this.getPosts()
      })
    }
  }
}
</script>

<style>

#ViewPosts {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#view {
  background: green;
}

#edit {
  background: yellow;
}

#delete {
  background: red;
}

.container {
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
}

table, th, td {
    border: 1px solid black; 
    border-collapse: collapse;
}

h1, h2 {
  font-weight: normal;
}
</style>

