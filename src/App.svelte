<Router {routes} restoreScrollState on:conditionsFailed={conditionsFailed} />

<script>
  import Router, { replace } from 'svelte-spa-router'
  import { routes } from './routes'

  function conditionsFailed() {
    replace('/404')
  }
</script>

<style lang="scss" global>
  @import '@gabio/design-svelte/src/styles/reset';
  @import '@gabio/design-svelte/src/styles/code-themes/one-dark-prism';
</style>
