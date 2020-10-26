<TopBar dark>
  <div slot="left">
    <HomeButton />
  </div>
</TopBar>
<GioSection>
  <GioContent maxWidth="750px">
    <svelte:component this={article} />
  </GioContent>
</GioSection>

<script lang="ts">
  import { replace } from 'svelte-spa-router'
  import TopBar from '../components/TopBar.svelte'
  import { GioSection, GioContent } from '@gabio/design-svelte'
  import { afterUpdate, SvelteComponent } from 'svelte'
  import { fromKebabCasetoPascalCase } from '@gabio/design-svelte/lib/strings'
  import * as articleFolder from '../data/articles'
  import HomeButton from '../components/buttons/HomeButton.svelte'

  interface Params {
    id?: string
  }

  let article: SvelteComponent

  export let params: Params = {}

  afterUpdate(() => {
    const articleName = fromKebabCasetoPascalCase(params.id)
    const articleFile = articleFolder[articleName]

    if (!articleFile) {
      replace('/404')
      return
    }

    article = articleFile
  })
</script>
