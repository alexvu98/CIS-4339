<template>
  <div id="CreatePosts">
    <h1>Add a New Post/Book</h1>
    <form>
        <label for="author">Author</label><br>
        <input type="text" name="author" required v-model="Post.author"><br>
        <label for="title">Title</label><br>
        <input type="text" name="title" required v-model="Post.title"> <br>
        <label for="edition">Edition</label><br>
        <input type="text" name="edition" required v-model="Post.edition"><br>
        <label for="isbn">ISBN</label><br>
        <input type="text" name="isbn" required v-model="Post.isbn"> <br>
        <label for="condition">Condition</label><br>
        <select name="condition" id="conditions" required v-model="Post.condition">
            <option value="new"> New </option>
            <option value="mint"> Mint </option>
            <option value="fair"> Fair </option>
            <option value="poor"> Poor </option>
        </select> <br>
        <label for="price">Price</label><br>
        <input type="number" step="0.01" name="price" required v-model="Post.price"><br>
        <label for="contactInfo">Contact Email</label><br>
        <input type="email" name="contactInfo" placeholder="email@email.com" required v-model="Post.contactInfo"><br>
        <button id="createButton" @click.prevent="submitPost()"> Create Post </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CreatePost',
  data () {
    return {
        // Post object to be put into MongoDB
        Post: {
            author: '',
            title: '',
            edition: '',
            price: null,
            contactInfo: '',
            condition: '',
            isbn: '',
        }
    }
  },
  methods: {
    // Method to create a new post
    submitPost() {
        let newPost= {
            author: this.Post.author,
            title: this.Post.title,
            edition: this.Post.edition,
            price: this.Post.price, 
            contactInfo: this.Post.contactInfo,
            condition: this.Post.condition,
            isbn: this.Post.isbn
        }
        // Sends object to API backend
        axios.post('http://localhost:3000/posts/', newPost).then(() => {
            // Call Vue alert library to create alert 
            this.$alert('New Post Created!')
            this.$router.push('viewPosts')
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
#createButton {
    margin-top: 20px
}

#conditions {
    width: 177px
}

h1, h2 {
  font-weight: normal;
}
</style>

