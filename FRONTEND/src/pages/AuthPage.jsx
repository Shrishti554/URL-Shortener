import {useState} from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

const AuthPage = () => {
  const [login, setLogin] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            URL Shortener
          </h1>
        </div>

        {/* Toggle between Login and Register */}
        {login ? <LoginForm state={setLogin}/> : <RegisterForm state={setLogin}/>}

      </div>
    </div>
  )
}

export default AuthPage