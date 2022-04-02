function ButtonPlusOne ({count, setCount}) {
    return(
      <div>
        count {count}
        <button onClick={() => setCount(10)}>click me</button>
      </div>
    )
  }


export default ButtonPlusOne