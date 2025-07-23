import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './rootRoute'
import DashboardPage from '../pages/DashboardPage'

export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardPage
})