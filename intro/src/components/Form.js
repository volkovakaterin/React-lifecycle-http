import React, {useState} from 'react';

function Form(props) {
      //console.log(props);
      const handleNameChange = evt => { 
      props.nameChange(evt.target.value)};
      const handleTimezoneChange = evt => { 
    props.onTimezoneChange(evt.target.value)};
      const addZone = e => {
        e.preventDefault();
        props.addClock()
        props.nameChange('')
        props.onTimezoneChange('')
      }
    return(
        <form className='timezone-form'>
        <div className='name-input'>
          <label htmlFor="name">Название</label>
          <input id="name" name="name" value={props.form.name} onChange={handleNameChange} />
        </div>
        <div className='timezone-input'>
          <label htmlFor="timezone">Временная зона</label>
          <input id="timezone" name="timezone" value={props.form.timezone} onChange={handleTimezoneChange} />
        </div>
        <button className='add' onClick={(e) => addZone(e)}>Добавить</button>
      </form>
    )
}

export default Form;
