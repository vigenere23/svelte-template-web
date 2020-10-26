<div class="top-bar" class:dark>
  <GioContent maxWidth="750px">
    <div class="top-bar__items top-bar__left">
      <slot name="left" />
    </div>
    <div class="top-bar__items top-bar__center">
      <slot name="center" />
    </div>
    <div class="top-bar__items top-bar__right">
      <slot name="right" />
    </div>
  </GioContent>
</div>

<script lang="ts">
  import { GioContent } from '@gabio/design-svelte'

  export let dark: boolean = false
</script>

<style lang="scss">
  @import '@gabio/design-svelte/src/styles/colors';
  @import '@gabio/design-svelte/src/styles/sizes';

  .top-bar {
    height: rem(64px);
    background-color: $background-light;
    color: white;

    &.dark {
      background-color: $background-dark;
      color: white;
    }

    :global(.gio-content) {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      overflow-x: auto;
    }

    &__left {
      left: -$icon-button-margin;
    }

    &__right {
      right: -$icon-button-margin;
    }
  }

  :global(.top-bar__items > *) {
    display: flex;
    flex-shrink: 0;
  }
</style>
