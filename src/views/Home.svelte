<div class="home">
  <GioSection id="intro">
    <GioContent>
      <GioTitle>Hello, world!</GioTitle>
      <GioSubtitle>Congrats on your new Svelte website!</GioSubtitle>
      <GioBodyText>
        This template was made using the awesome
        <GioSmartLink
          accent
          href="https://github.com/vigenere23/gabio-design-svelte">
          @gabio/design-svelte
        </GioSmartLink>
        library!
      </GioBodyText>
      <div class="home__links">
        {#each links as link}
          <div class="home__link">
            <GioButton dark href={link.href}>
              {#if link.icon}
                <GioIcon name={link.icon} />
              {/if}
              <span>{link.text}</span>
            </GioButton>
          </div>
        {/each}
      </div>
    </GioContent>
  </GioSection>
</div>

<script lang="ts">
  import {
    GioSection,
    GioContent,
    GioTitle,
    GioSubtitle,
    GioBodyText,
    GioSmartLink,
    GioIcon,
    GioButton
  } from '@gabio/design-svelte'
  import { links } from '../data/links'
</script>

<style lang="scss">
  .home {
    text-align: center;

    &__links {
      margin: 32px 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }
</style>
