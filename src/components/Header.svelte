<header class="header" class:dark>
  <Logo link width="86px" {dark} />
</header>

<script lang="ts">
  import Logo from './Logo.svelte'

  export let dark = false
</script>

<style lang="scss">
  @import '@gabio/design-svelte/src/styles/colors';
  @import '@gabio/design-svelte/src/styles/sizes';

  .header {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $background-light;

    &.dark {
      background-color: $background-dark;
    }
  }
</style>
