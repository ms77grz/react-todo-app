import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import About from './components/pages/About'
import './App.css'

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Route
          exact
          path='/'
          render={(props) => (
            <>
              <Todos />
            </>
          )}
        />
        <Route path='/about' component={About}></Route>
      </div>
    </Router>
  )
}

export default App
