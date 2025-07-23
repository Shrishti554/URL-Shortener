import { rootRoute } from './rootRoute'
import { homePageRoute } from './homePage'
import { authRoute } from './auth.route'
import { dashboardRoute } from './dashboard'

export const routeTree = rootRoute.addChildren([
    homePageRoute,
    authRoute,
    dashboardRoute
])