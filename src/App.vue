<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="navbar__link --left" to="/where">where?</RouterLink>
        <RouterLink class="navbar__link --right" to="/what">what?</RouterLink>
        <RouterLink class="navbar__link --bottom" to="/who">who?</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

</template>

<style>
@import '@/assets/base.css';
</style>
