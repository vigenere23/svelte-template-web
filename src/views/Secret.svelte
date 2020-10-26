<div class="secret">
  <GioSection>
    <GioContent>
      <GioTitle>Secret page</GioTitle>
      <GioSubtitle>
        This page should not be visible in production mode
      </GioSubtitle>
      <div class="secret__links">
        <HomeButton dark />
      </div>
    </GioContent>
  </GioSection>
</div>

<script lang="ts">
  import {
    GioWebPage,
    GioSection,
    GioContent,
    GioTitle,
    GioSubtitle
  } from '@gabio/design-svelte'
  import HomeButton from '../components/buttons/HomeButton.svelte'
</script>

<style lang="scss">
  .secret {
    text-align: center;

    &__links {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
