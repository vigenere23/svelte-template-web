<DefaultLayout>
  <div class="not-found">
    <GioSection>
      <GioContent>
        <GioTitle noMargin fontSize="140px">404</GioTitle>
        <GioSubtitle>This page was not found</GioSubtitle>
        <div class="not-found__links">
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
  .not-found {
    text-align: center;

    &__links {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
