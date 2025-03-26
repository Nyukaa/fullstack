import Content from './Content'
import Total from './Total'

const Header = ({course}) => {
    return (
      <div>
        <h1> {course.name} </h1>
        <Content parts={course.parts} /> 
        <Total parts={course.parts} /> 
      </div>
    )
  }

  export default Header