import { useState } from 'react'
import Square from './components/Square'
import './App.css'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))


  return (
    <main className='w-fit my-10 mx-auto'>
      <h1 className='text-color1 text-3xl font-croissant text-center'>
       Tres en Raya
      </h1>
      <section className='grid grid-cols-3 gap-2.5 
                          my-10'
      >
        {
          board.map((square, index) => {
            return(
              <Square
                key={index}
                index={index}
              >
                { square } 
              </Square>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
