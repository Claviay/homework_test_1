<!-- src/components/NavBar.vue -->
<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/line-chart">Line Chart</router-link></li>
        <li><router-link to="/gauge-chart">Gauge Chart</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<style>
nav {
  background-color: #4CAF50;
  padding: 1em;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline;
  margin-right: 1em;
}
a {
  color: white;
  text-decoration: none;
}
a.router-link-exact-active {
  font-weight: bold;
}
</style>
