import { useState } from 'react'
import '../styles.css'

export const CounterApp = ( {value} ) => {

    const [ counter, setCounter ] = useState(0);

    const handleAdd = (event) => {
        setCounter( ( c ) => c+1 );
    }
    const handleSubtract = (event) => { 
        setCounter( ( c ) => c-1 );
    }
    const handleReset = (event) => {
        setCounter( ( c ) => 0 );
    }

    return(
        <>
        <h1 className='bar-tabata'>Numero de tabatas</h1>
        <h2> { counter } </h2>
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleSubtract }>-1</button>
        <button onClick={ handleReset }>RESET</button>
        </>
    );
  }
