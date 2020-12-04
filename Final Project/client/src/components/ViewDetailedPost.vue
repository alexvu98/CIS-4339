<template>
  <div id="ViewDetailedPost">
      <h1>Post Details</h1>
      <div class="post-container">
          <div class='post' v-for="detail in detailedPost" :key="detail._id">
              
              <p> {{"Date Posted: " + detail.datePosted}} </p>
              <p> {{"Author: " + detail.author}} </p>
              <p> {{"Title: " + detail.title}} </p>
              <p> {{"Edition: " + detail.edition}} </p>
              <p> {{"ISBN: " + detail.isbn}} </p>
              <p> {{"Condition: " + detail.condition}} </p>
              <p> {{"Price: " + "$" + detail.price}} </p>
              <p> {{"Contact Info: " + detail.contactInfo}} </p>
          </div>
          <button v-on:click="goBack()"> Go Back to Posts </button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ViewDetailedPost',
  data () {
    return {
      detailedPost: []
    }
  },
  created() {
      this.detailedPost=this.$route.params
  },
  methods: {
    // Method to go back to posts screen
    goBack() {
      this.$router.push('viewPosts')
    }
  }
}
</script>

<style>

#ViewDetailedPost {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}
</style>

