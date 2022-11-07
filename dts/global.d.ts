import 'vue-router'
import { routeNames } from '@/router/routeNames'
import { EPortalNames } from '@/plugins'
import { EComponentSize, EComponentType } from '@/types'

declare module 'vue-router' {
  interface RouteMeta {
    // todo: this is just an example. Please setup your own route meta params.
  }
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    // todo: Here you define you global vue definitions.
    $routeNames: typeof routeNames
  }
}