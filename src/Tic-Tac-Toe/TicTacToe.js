import React from 'react'
import Footer from '../BasicBody/Footer'
import Board from './Board'
import './TicTacToe.css'

const TicTacToe = () => {
  return (
    <>
       
         <div >
          <h1 className='h1'>TicTacToe</h1>
            <Board/>
            <i class="bi bi-linkedin"></i>
            <Footer/>
         </div>
   
    </>

  )
}

export default TicTacToe