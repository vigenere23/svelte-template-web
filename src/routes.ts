import { wrap } from 'svelte-spa-router/wrap'
import Home from './views/Home.svelte'
import Article from './views/Article.svelte'
import Secret from './views/Secret.svelte'
import NotFound from './views/NotFound.svelte'

const production = !process.env.ROLLUP_WATCH

export const routes = {
  '/': Home,
  '/article/:id': Article,
  '/secret': wrap({
    conditions: [() => !production],
    component: Secret
  }),
  '/404': NotFound,
  '*': NotFound
}
