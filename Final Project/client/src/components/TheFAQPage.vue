<template>
  <div id="FAQ">
    <h1>Frequently Asked Questions</h1>
    <div id="questions">
        <p><b>1. What is the purpose of this webpage?</b></p>
        <p>BookBay is a single page web application where users can post their old/used books for sale</p>
        <p><b>2. Do I need to register and login to use the apps features?</b></p>
        <p>As of right now, there is functionality to register and login. However you do not need to register/login to use the BookBay's features</p>
        <p><b>3. Can other people Edit/Delete my post?</b></p>
        <p>As of right now, yes. There is no route protection implemented in the web application.</p>
        <p><b>4. What are some more features that need to be added?</b></p>
        <p>I would like to implement route protection so that only someone who made a post can access that specific can modify and delete it.</p>
        <p>Another thing is that when the user enters the edit page, I would like it to where the form auto fills the data based on what post the user selected so that
          the user does not have to re-enter all of the information.
        </p>
        <p>Lastly, I want to make the front end a lot nicer and use libraries like vuetify to achieve a more attractive front end</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>

#FAQ {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}

#questions {
    float: left;
    text-align: left;
}

h1, h2 {
  font-weight: normal;
}
</style>

