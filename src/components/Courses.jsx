import {Route, NavLink} from 'react-router-dom'
import HTML from './courses/HTML'
import JavaScript from './courses/JavaScript'
import CSS from './courses/CSS'

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li>
          <NavLink to="/courses/html">HTML</NavLink>
        </li>
        <li>
          <NavLink to="/courses/css">CSS</NavLink>
        </li>
        <li>
          <NavLink to="/courses/javascript">JavaScript</NavLink>
        </li>
      </ul>
    </div>

    {/* Nested Routes */}
    <Route path="/courses/html" component={HTML}/>
    <Route path="/courses/css" component={CSS}/>
    <Route path="/courses/javascript" component={JavaScript}/>
  </div>
);

export default Courses;
