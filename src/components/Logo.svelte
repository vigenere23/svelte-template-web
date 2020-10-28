<div class="logo" style="width: {width}">
  <GioSmartLink disable={!link} href="#/">
    <GioImage srcs={logos} desc="Logo" />
  </GioSmartLink>
</div>

<script lang="ts">
  import { GioSmartLink, GioImage } from '@gabio/design-svelte'

  export let width: string = '100%'
  export let link: boolean = false
  export let dark: boolean = false

  $: fileName = `images/logos/logo-${dark ? 'white' : 'black'}`
  $: logos = [`${fileName}_thumb.webp`, `${fileName}.png`]
</script>

<style lang="scss">
  .logo {
    margin: 2rem;
  }
</style>
