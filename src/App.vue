<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data(){
    return {
      openMenu: false
    }
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav :class="openMenu ? 'header__nav-content block' : 'header__nav-content'">
        <RouterLink class="navbar__link --left" to="/where">where?</RouterLink>
        <RouterLink class="navbar__link --right" to="/what">what?</RouterLink>
        <RouterLink class="navbar__link --bottom" to="/who">who?</RouterLink>
      </nav>
      <div @click="openMenu = !openMenu" :class="openMenu ? 'menu__burger open__menu' : 'menu__burger'"></div>
    </div>
  </header>

  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>

</template>

<style>
@import '@/assets/base.css';
</style>
