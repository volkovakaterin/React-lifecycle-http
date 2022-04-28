import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import Clock from './components/Clock';
import { nanoid } from 'nanoid'

function App() {
  const [form, setForm] = useState({
    name: '',
    timezone: ''})
  const [timezone, setTimezone] = useState([])  
  
    function onNameChange(value){
      setForm(prevForm=>({...prevForm, name: value}) )
    }

    const onTimeZoneChange = value => {
      setForm(prevForm =>({...prevForm, timezone: value}))
    }

    const deleteClock = id => {
       setTimezone(prevTimezone => ([...prevTimezone.filter(zone => zone.key !== id)]))
    }

    function addClock(){
      const key = nanoid();
      setTimezone(prevTimezone =>([...prevTimezone, <Clock offset = {form} deleteClock = {deleteClock} key={key} id = {key}/>]))
    }   
  return (
    <>
       <Form form = {form} nameChange = {onNameChange} onTimezoneChange = {onTimeZoneChange} addClock = {addClock}/>
       <div className='all-clock'>
       {timezone} 
       </div>
   
    </>
    
  );
}

export default App;
