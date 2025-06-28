import { useState } from 'react'
import Perfil from './Components/Perfil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Perfil />
        
      </div>
      
    </>
  )
}

export default App
