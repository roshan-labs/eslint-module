import type { Options } from 'vite-plugin-eslint'
import eslint from 'vite-plugin-eslint'
import { addVitePlugin, defineNuxtModule } from '@nuxt/kit'

import { name, version } from '../package.json'

export interface ModuleOptions extends Options {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'eslint',
  },
  defaults: {
    cache: true,
  },
  setup(options) {
    addVitePlugin(eslint(options))
  },
})
