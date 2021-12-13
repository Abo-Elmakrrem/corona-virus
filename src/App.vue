<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/Test">test</router-link> |
            <router-link to="/About">About</router-link> |
            <router-link to="/Symptoms">Symptoms</router-link> |
            <router-link to="/prevention">prevention</router-link> |
            <router-link to="/Treatment">Treatment</router-link> |
            <router-link to="/Faq">FAQ</router-link> |
            <router-link to="/News">News</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<style>
</style>
