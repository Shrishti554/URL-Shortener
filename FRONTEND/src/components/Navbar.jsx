import { useAppDispatch, useAppSelector } from '../store/hooks'
import { logout, selectIsAuthenticated, selectUser } from '../store/slices/authSlice'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  const user = useAppSelector(selectUser)

  const handleLogin = () => {
    // This would redirect to login page or open login modal
    console.log('Navigate to login')
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Brand/Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">
                URL Shortener
              </h1>
            </div>
          </div>

          {/* Right side - User info and login/logout */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {/* User name */}
                <span className="text-gray-700 font-medium">
                  Welcome, {user?.name || 'User'}
                </span>
                
                {/* Logout button */}
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Login button */}
                <button
                  onClick={handleLogin}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
                >
                  Login
                </button>
                
                {/* Register button */}
                <button
                  onClick={handleLogin}
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
