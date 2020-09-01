<template>
  <div id="app">
    <AppHeader />
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader'

export default {
  components: {
    AppHeader
  }
}
</script>
