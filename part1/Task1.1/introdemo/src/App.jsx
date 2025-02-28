//Header takes care of rendering the name of the course, 
//Content renders the parts and their number of exercises and
// Total renders the total number of exercises.
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
const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Part {props.part} ex {props.exercises} 
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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1}/> 
      <Content part={part2} exercises={exercises2}/> 
      <Content part={part3} exercises={exercises3}/> 
      <Total number={exercises1+exercises2+exercises3} />
    </div>
  )
}


export default App
