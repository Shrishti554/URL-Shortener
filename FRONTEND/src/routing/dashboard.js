import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './routeTree'
import AuthPage from '../pages/AuthPage'
import DashboardPage from '../pages/DashboardPage'

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardPage
})

export default dashboardRoute;