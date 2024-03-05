<script setup>
import { watchEffect } from 'vue'
import { routeState } from './store'
import { useTracking } from './components/useTracking'

// useTracking()
const { trackEvent, trackScreen } = useTracking()
watchEffect(() => {
  if (routeState.currentRouteName) {
    trackScreen(routeState.currentRouteName, routeState.currentRouteName)
  }
})
</script>

<template>
  <div class="container">
    <h1>Wisetracker SDK Integration with VUE sample page</h1>
    <div class="wrapper">
      <h2>logScreen sample</h2>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </div>
  <div class="container">
    <h2>Routed page</h2>
    <RouterView />
  </div>
  <div class="container">
    <h2>logEvent sample</h2>
    <button
      style="margin-right: 5px"
      @click="
        () =>
          trackEvent('w_login_complate', {
            loginTp: 'kakao'
          })
      "
    >
      Login with kakao
    </button>
    <button
      @click="
        () =>
          trackEvent('w_search', {
            search_term: 'ABC'
          })
      "
    >
      Search Keyword, term ABC
    </button>
  </div>
</template>

<style scoped>
.container {
  margin-bottom: 2rem;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}
h1 {
  font-weight: 700;
  margin-bottom: 2rem;
}
</style>
