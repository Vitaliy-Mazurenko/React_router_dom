import Course from "./Course";
import {frontEnd} from "../../data";

const CSS = props => {
  let courses = frontEnd.map(course => {
    return <Course course={coures} key={course.id} />;
  });
  return (
    <div>
      <ul>{courses}</ul>
    </div>
  );
};

export default CSS;
