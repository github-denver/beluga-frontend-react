import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import List from './pages/List'
import Read from './pages/Read'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div className="App">
      <Route component={Index} path={['/']} exact />
      <Route component={List} path={['/:service/list', '/:service/list/:number']} />
      <Route component={Read} path={'/:service/read/:number'} />
      <Route component={Login} path={'/login'} />
      <Route component={Register} path={'/register'} />
    </div>
  )
}

export default App
