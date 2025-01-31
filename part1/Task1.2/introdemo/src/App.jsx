//Header takes care of rendering the name of the course, 
//Content renders the parts and their number of exercises and
// Total renders the total number of exercises.
const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14
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
      <Part part={part1} exercises={exercises1}/> 
      <Part part={part2} exercises={exercises2}/> 
      <Part part={part3} exercises={exercises3}/>
    </div>
  )
}
const Part = (props) => {
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
  

  return (
    <div>
      <Header course={course} />
      <Content /> 
      <Total number={exercises1+exercises2+exercises3} />
    </div>
  )
}


export default App
