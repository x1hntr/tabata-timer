
import {useState} from 'react'


export const AddExercise= ( {onNewExercise} ) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = (event) =>{
    setInputValue(event.target.value);
    console.log(event.target.value);
  }

const onSubmit = (event) =>{
  event.preventDefault();
  if(inputValue.trim().length <= 1) return;
  onNewExercise(inputValue.trim());
  setInputValue('');
  }

return (
  <form onSubmit={ (event) => onSubmit(event) }>
    <input 
      className="txtInput"
      type='text'
      placeholder="Excercise"
      value={ inputValue }
      onChange={ (event) => onInputChange(event)}
    />
  </form>
)
}
