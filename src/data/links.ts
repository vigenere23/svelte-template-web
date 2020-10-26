import type { Link } from '../types/Link'

export const links: Link[] = [
  {
    text: 'Home',
    href: '/',
    icon: 'home'
  },
  {
    text: 'article',
    href: '#/article/some-article',
    icon: 'markdown'
  },
  {
    text: 'secret',
    href: '#/secret',
    icon: 'lock'
  },
  {
    text: 'github',
    href: 'https://github.com/vigenere23/svelte-template-web',
    icon: 'github'
  }
]
