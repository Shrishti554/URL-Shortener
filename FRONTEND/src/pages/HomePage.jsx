import React from 'react'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  return (
     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            URL Shortener
          </h1>
          <p className="text-gray-600 text-lg">
            Transform your long URLs into short, shareable links
          </p>
        </div>

     <UrlForm />


        {/* Footer */}
        <div className="text-center mt-8 text-gray-500">
          <p>Fast, reliable, and secure URL shortening service</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage