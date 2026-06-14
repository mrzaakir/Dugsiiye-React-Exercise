import { useState } from 'react'
import ShowCase from './ShowCase';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShowCase/>
    </>
  )
}

export default App
