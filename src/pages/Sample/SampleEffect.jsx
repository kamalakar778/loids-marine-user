import React, {useState, useEffect} from 'react'

const SampleEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {console.log(count, setCount)}, [count,setCount])
  return (
    <div>
      <p>Default Count {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
}

export default SampleEffect;

