import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Teachers from './components/Teachers'
import Courses from './components/Courses'

const App = () => (
  <Router>
  <div className="container">
    <Header />
    <Route exact path="/" component={Home}/>
    
    <Route path="/about">
      <About />
    </Route>
    <Route path="/courses" render={() => <Courses />} />
    <Route path="/teachers" component={Teachers} />
  </div>
  </Router>
);

export default App;
