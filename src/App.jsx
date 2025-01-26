import { useState } from 'react'
import Editor from './Components/Editor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello</h1>
      <Editor/>
    </>
  )
}

export default App
