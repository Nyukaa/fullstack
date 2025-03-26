import Header from './Header'

const Course = ({courses}) => {
    return (
      <div>
        {courses.map(course => 
        <Header key={course.id} course={course} /> 
      )} 
      </div>
    )
  }
export default Course