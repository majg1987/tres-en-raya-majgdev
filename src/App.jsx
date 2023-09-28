import { useState, useEffect } from 'react'

import Square from './components/Square'
import Marker from './components/Marker'
import Button from './components/Button'

import { TURNS } from './constants'
import {checkWinner, checkEndGame} from './logic/board'

import './App.css'
import WinnerModal from './components/WinnerModal'
import { resetGameStorage, resetVictoriesStorage, saveGameStorage, saveVictoriesStorage, showModalWinnerStorage } from './logic/storage'

function App() {

  const [board, setBoard] = useState( () => {
    const boardFromStorage = JSON.parse(window.localStorage.getItem('board'))
    return boardFromStorage ? boardFromStorage : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.X
  })
  const [victories, setVictories] = useState(()=> {
    const victoriesFromStorage = JSON.parse(window.localStorage.getItem('victories'))
    return victoriesFromStorage ? 
          victoriesFromStorage :  
          {
          x: 0,
          y: 0
          }
  })
  // null => aún no existe ganador 
  // false => la partida ha terminado en empate
  const [winner, setWinner] = useState( () => {
    const winnerFromStorage = window.localStorage.getItem('winner')
    return winnerFromStorage ? winnerFromStorage : null
  })

  const classTurn = 'bg-color1 p-2 rounded-lg'

  const updateBoard = (index) => {
    // No actualizamos la posición si ya tiene ficha
    if (board[index] || winner) return
    // Actualiza el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.Y : TURNS.X
    setTurn(newTurn)
    // Comprueba si existe un ganador 
    const newWinner = checkWinner(newBoard) 
    if (newWinner) {
      setWinner(newWinner)
      if (newWinner === TURNS.X) {
        const newVictories = {
          x: victories.x + 1,
          y: victories.y
        }
        setVictories(newVictories)
      } else {
        const newVictories = {
          x: victories.x ,
          y: victories.y + 1
        }
        setVictories(newVictories)
      }
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage
  }

  const resetWins = () => {
    const reset = {
      x: 0,
      y: 0
    }
    setVictories(reset)
    resetVictoriesStorage
  }

  useEffect(() => {
    // Guardar la partida en localStore
    saveGameStorage(board, turn)
    saveVictoriesStorage(victories)
    showModalWinnerStorage(winner)
  }, [board, turn, victories, winner]);

  return (
    <main className='w-fit my-10 mx-auto'>
      <h1 className='text-color1 text-6xl font-croissant text-center'>
       Tres en Raya
      </h1>
      <section className='mt-5 z-10'>
        <div className='grid grid-cols-2 
                        justify-items-center items-center
                        m-3'
        >
          <Marker turn={TURNS.X} activeTurn={turn} classTurn={classTurn}>
            {victories.x}
          </Marker>
          <Marker turn={TURNS.Y} activeTurn={turn} classTurn={classTurn}> 
            {victories.y}
          </Marker>        
        </div>

      </section>
      <section className='grid grid-cols-3 gap-2.5 
                          my-5'
      >
        {
          board.map((square, index) => {
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                { square } 
              </Square>
            )
          })
        }
      </section>
      <section className='flex justify-between mb-5 mt-10'>
          <Button text='Reiniciar Partida' clickAction={resetGame} color='color1'/>
          <Button text='Reiniciar Marcadores' clickAction={resetWins} color='color1'/>
      </section>
        <WinnerModal winner={winner} resetGame={resetGame}/>       
    </main>
  )
}

export default App
