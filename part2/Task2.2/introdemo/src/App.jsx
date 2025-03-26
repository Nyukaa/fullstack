const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name} /> 
      <Content parts={course.parts} /> 
      <Total parts={course.parts} /> 
    </div>
  )
}

const Header = ({name}) => {
  //console.log(name)
  return (
    <div>
      <h1> {name} </h1>
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
  //console.log(props)
  return (
    <div>
      <b>
      total of {parts.reduce((res, i) => res + i.exercises, 0)} exercices
      </b>
    </div>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

export default App