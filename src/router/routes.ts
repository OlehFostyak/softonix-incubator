import type { RouteRecordRaw } from 'vue-router'

import { routeNames } from './route-names'
import { contactsRoutes } from '@/views/contacts/contacts.routes'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/',
    name: routeNames.rootPage,
    redirect: { name: routeNames.contacts }
  },

  ...contactsRoutes
]
