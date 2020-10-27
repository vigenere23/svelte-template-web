<DefaultLayout>
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
</DefaultLayout>

<script lang="ts">
  import {
    GioSection,
    GioContent,
    GioTitle,
    GioSubtitle
  } from '@gabio/design-svelte'
  import HomeButton from '../components/buttons/HomeButton.svelte'
  import DefaultLayout from '../layouts/DefaultLayout.svelte'
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
