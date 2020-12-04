<template>
  <div id="East">
    <h1>AFC East Data</h1>
      <table class="container">
        <tr>
          <th>AFC Division</th>
          <th>Team Name</th>
          <th>Wins</th>
          <th>Losses</th>
          <th>Ties</th>
        </tr>

        <tr v-for="team in filterEast" :key="team.teamName">
          <td> {{team.division}} </td>
          <td> {{team.teamName}} </td>
          <td> {{team.numWins}} </td>
          <td> {{team.numLosses}} </td>
          <td> {{team.numTies}} </td>
        </tr>

      </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'East',
  data () {
    return {
      teams: []
    }
  },
  created() {
    axios.get('http://localhost:3000/team/teamData').then(response =>{
      console.log(response)
      this.teams = response.data
    }).catch((error) =>{
      console.log(error)
    })
  },
  computed: {
      filterEast() {
          return this.teams.filter(team => {
              return team.division == 'AFC East'
          })
      }
  }
}
</script>

<style>

#Home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  margin-left: auto;
  margin-right: auto;
}

table, th, td {
    border: 1px solid black; 
    border-collapse: collapse;
}

h1, h2 {
  font-weight: normal;
}
</style>

