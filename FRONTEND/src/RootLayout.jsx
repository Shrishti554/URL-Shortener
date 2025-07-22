import HomePage from "./pages/HomePage"
import LoginForm from "./components/LoginForm"
import AuthPage from "./pages/AuthPage"
import Navbar from "./components/Navbar"
import { Outlet } from "@tanstack/react-router"

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
        <Outlet />
  
    </div>
  )
}

export default RootLayout