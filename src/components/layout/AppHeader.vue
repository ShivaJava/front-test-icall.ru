<template>
  <header class="app-header">
      <Container>
        <slot/>
      </Container>
  </header>
</template>

<script>
import Container from './Container'

export default {
  components: {
    Container
  }
}
</script>

<style lang="scss" scoped>
  .app-header {
    width: 100%;
    background-color: var(--dark);
  }
</style>
