import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './routeTree'
import HomePage from '../pages/HomePage'

const homePageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage
})

export default homePageRoute;