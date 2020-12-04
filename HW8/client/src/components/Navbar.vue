<template>
    <div id='Navbar' class="main-nav">
         <ul>
             <li><router-link to="/">Home</router-link></li>
             <li><router-link to="/north">North</router-link></li>
             <li><router-link to="/south">South</router-link></li>
             <li><router-link to="/east">East</router-link></li>
             <li><router-link to="/west">West</router-link></li>
         </ul>
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
    .main-nav ul li{
        display: inline;
        list-style-type: none;
    }
</style>