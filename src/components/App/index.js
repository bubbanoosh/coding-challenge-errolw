import React from 'react'
import { Route } from 'react-router-dom'
import Navigation from '../Common/Navigation'
import Header from '../Common/Header'
import Home from '../Home'
import CodingChallenge from '../CodingChallenge'

const App = () => (
  <div>
    <Navigation />
    <Header />

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/coding-challenge" component={CodingChallenge} />
    </main>
  </div>
)

export default App;