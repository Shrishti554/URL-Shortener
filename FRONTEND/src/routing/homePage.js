import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './rootRoute'
import HomePage from '../pages/HomePage'

export const homePageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage
})