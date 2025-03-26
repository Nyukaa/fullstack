const Course = ({courses}) => {
  return (
    <div>
      {courses.map(course => 
      <Header key={course.id} course={course} /> 
    )} 
    </div>
  )
}

const Header = ({course}) => {
  return (
    <div>
      <h1> {course.name} </h1>
      <Content parts={course.parts} /> 
      <Total parts={course.parts} /> 
    </div>
  )
}

const Content = ({parts}) => { 
  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} part={part} />
      )}  
    </div>
  )
}
const Part = ({part}) => {
  return (
    <div>
      <p> Part {part.name} ex {part.exercises}</p>
    </div>
  )
}

const Total = ({parts}) => {
  return (
    <div>
      <b>
      total of {parts.reduce((res, i) => res + i.exercises, 0)} exercices
      </b>
    </div>
  )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
   <div>
    <h1> Web development curriculum</h1>
    <Course courses={courses} />
   </div>
  )
  

}

export default App