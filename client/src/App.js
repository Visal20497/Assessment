import React from 'react'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Policy from './pages/Policy.jsx'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/404.jsx'
import HomePage from './pages/HomePage.jsx'
import CategoryPage from './pages/Category.jsx'
import SignIn from './pages/auth/SignIn.jsx'
import Signup from './pages/auth/Signup.jsx'
import ForgetPassword from './pages/auth/ForgetPassword.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
    </Routes>
  )
}

export default App