import { createRootRoute } from '@tanstack/react-router'
import App from '../RootLayout.jsx'
import { homePageRoute } from './homePage'
import { authRoute } from './auth.route'
import { dashboardRoute } from './dashboard'
import RootLayout from '../RootLayout.jsx'

 export const rootRoute = createRootRoute({
  component: RootLayout 
})

export const routeTree =  rootRoute.addChildren([
    homePageRoute, 
    authRoute,
     dashboardRoute
])