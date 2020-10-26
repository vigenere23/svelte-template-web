<GioWebPage headerHeight="120px">
  <Header />
  <main>
    <svelte:component this={view} {params} />
  </main>
</GioWebPage>

<script lang="ts">
  import Header from '../components/Header.svelte'
  import { GioWebPage } from '@gabio/design-svelte'
  import type { SvelteComponent } from 'svelte'

  export let view: SvelteComponent
  export let params = {}
</script>
