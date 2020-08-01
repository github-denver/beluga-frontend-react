import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import List from './pages/List'
import Read from './pages/Read'

function App() {
  return (
    <div className="App">
      <Route component={Index} path={['/']} exact />
      <Route component={List} path={['/:service/list', '/:service/list/:number']} />
      <Route component={Read} path={'/:service/read/:number'} />
    </div>
  )
}

export default App
