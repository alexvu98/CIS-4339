<template>
  <div id="CreatePosts">
    <h1>Edit Post</h1>
    <div class="editPostForm" v-for="info in editedPost" :key="info._id" >
      <form>
        <label for="id">ID (Read Only)</label> <br>
        <input type="text" name="id" :value="info._id" readonly> <br>
        <label for="author">Author</label><br>
        <input type="text" name="author" required v-model="Post.author" ><br>
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
        <div class="buttons">
          <button id="createButton" @click.prevent="submitPost(info._id)"> Edit Post </button>
          <button @click="goBack()"> Go Back </button>
        </div>
    </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditPost',
  data () {
    return {
        editedPost: [],
        // Post object to be put into MongoDB
        Post: {
            _id: null,
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
  created() {
    // Populates editedPost from selected data
    this.editedPost=this.$route.params
  },
  // Used to prefill form 
  methods: {
    // Method to Edit a post
    submitPost(id) {
        let updatedPost = {
            author: this.Post.author,
            title: this.Post.title,
            edition: this.Post.edition,
            price: this.Post.price, 
            contactInfo: this.Post.contactInfo,
            condition: this.Post.condition,
            isbn: this.Post.isbn
        }
        // Sends object to API backend for edit
        axios.patch('http://localhost:3000/posts/' + id, updatedPost).then((response) => {
            // Call Vue alert library to create alert 
            this.$alert('Post Updated!')
            this.$router.push('viewPosts')
        }).catch ((error) => {
            console.log(error)
        })
    },
    goBack() {
      this.$router.push('viewPosts')
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

