<GioWebPage headerHeight="120px">
  <Header />
  <main>
    <slot />
  </main>
</GioWebPage>

<script lang="ts">
  import Header from '../components/Header.svelte'
  import { GioWebPage } from '@gabio/design-svelte'
</script>
