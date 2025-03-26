const Total = ({parts}) => {
    return (
      <div>
        <b>
        total of {parts.reduce((res, i) => res + i.exercises, 0)} exercices
        </b>
      </div>
    )
  }
  export default Total