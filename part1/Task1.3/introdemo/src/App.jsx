const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        Hello {props.course}
      </h1>
    </div>
  )
}
const Content = () => {
  
  return (
    <div>
      <Part part={part1} /> 
      <Part part={part2} /> 
      <Part part={part3} />
    </div>
  )
}
const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>
      Part {props.part.name} ex {props.part.exercises}
      </p>
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
      Number of exercises {props.number}
      </p>
    </div>
  )
}
const App = () => {
  
    return (
    <div>
      <Header course={course} />
      <Content /> 
      <Total number={part1.exercises+part2.exercises+part3.exercises} />
    </div>
  )
}


export default App
