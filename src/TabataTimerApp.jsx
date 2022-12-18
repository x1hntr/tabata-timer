import { AddExercise } from "./components/AddExercise"
import "../src/styles.css"
import { useState} from "react"

export const TabataTimerApp = () => {

  const [excercise, setExcercise] = useState([]);

  const onAddExcercise = (newExcercise) =>{
    console.log(newExcercise);
    if(excercise.includes(newExcercise)) return;
    setExcercise([...excercise, newExcercise , 'REST']);
  }

  return (
    <>
    <h1 className="bar-title">TabataTimerApp</h1>
    <AddExercise 
      onNewExercise={ event =>onAddExcercise(event) }
    />
    <ol className="exercise">
      {
        excercise.map( excercise => {
          return <li className=""
          key={excercise}>{excercise}</li>
        } )
      }
    </ol>
    </>
    
  )
}
