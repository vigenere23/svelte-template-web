<GioButton {dark} {noMarginLeft} href="#/">
  <GioIcon name="home" />
  <span>Home</span>
</GioButton>

<script lang="ts">
  import { GioButton, GioIcon } from '@gabio/design-svelte'

  export let dark: boolean = false
  export let noMarginLeft: boolean = false
</script>
