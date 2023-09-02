import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addNote } from '../Redux/action';


export default function NotesForm() {

  let [title, setTitle] = useState('');
  let [content, setContent] = useState('')

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleSubmission(e){
    e.preventDefault();
    dispatch(addNote(title, content))
    setTitle('')
    setContent('')
    navigate('/allNotes')
  }
  function ViewNotes(){
    navigate('/allNotes')
  }

  return (
    <div className='formContainer'>
      <div className='fields '>
        <h2>React Notes App</h2>
        <form onSubmit={handleSubmission}>
        <div class="inputbox">
            <input required="required" type="text" value={title} onChange = {(e)=> setTitle(e.target.value)}/>
            <span>Enter a Title</span>
                <i></i>
        </div><br></br>
        <div class="inputbox">
            <input required="required" type="text" value={content} onChange = {(e)=> setContent(e.target.value)}/>
            <span>Enter Content</span>
                <i></i>
        </div>
          <br></br>
          <div className='heading-notes'>
          <button data-text="Awesome" class="button" role="button">
    <span class="actual-text">&nbsp;ADD_NOTE&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;ADD_NOTE&nbsp;</span>
</button>
<button data-text="Awesome" class="button" role="button" onClick={ViewNotes}>
    <span class="actual-text">&nbsp;VIEW_NOTES&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;VIEW_NOTES&nbsp;</span>
</button>
           </div>
        </form>
        </div>
        
    </div>
   
  )
}
