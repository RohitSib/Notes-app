import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNote, updateNote } from '../Redux/action';
import { useNavigate } from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
  

export default function AllNotes() {

  const notes = useSelector((state) => state.notes)
  console.log(notes)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editingIndex, setEditingIndex] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingContent, setEditingContent] = useState("");

  const handleEditSubmit = (event) => {
    event.preventDefault();
    if (editingIndex !== null) {
      dispatch(updateNote(editingIndex, editingTitle, editingContent));
      setEditingIndex(null);
      setEditingTitle("");
      setEditingContent("");
    }
  };
  
  return (
<>
      <button data-text="Awesome" class="button"  onClick={() => navigate('/')}>
    <span class="actual-text" >&nbsp;HOME&nbsp;</span>
    <span class="hover-text"  aria-hidden="true">&nbsp;HOME&nbsp;</span>
    </button><br></br>
        {notes.map((note, index) => {
          return (
            <>
            
                  {editingIndex === index ? (
                    <form onSubmit={handleEditSubmit}>
                      <div className="form-group">
                        <label className='titleInput'>Title</label>
                        <input
                          type="text"
                          className="form-control Textarea-colors"
                          id="titleInput"
                          value={editingTitle}
                          onChange={(event) =>
                            setEditingTitle(event.target.value)
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label className='contentInput' htmlFor="contentInput">Content</label>
                        <textarea
                          className="form-control Textarea-colors"
                          id="contentInput"
                          rows="3"
                          value={editingContent}
                          onChange={(event) =>
                            setEditingContent(event.target.value)
                          }
                        ></textarea>
                      </div><br></br>
                      <div className='inside-edit-buttons'>
                      <button type="submit"  >
                        Save
                      </button>
                      <button
                        type="button"
                        
                        onClick={() => {
                          setEditingIndex(null);
                          setEditingTitle("");
                          setEditingContent("");
                        }}
                      >
                        Cancel
                      </button></div>
                    </form>

           ):(<><article class="card">
    <div class="temporary_text ">
        <div className='sameline'><h5>{note.title}</h5></div>
    </div>
    <div class="card_content">
        <p class="card_description">{note.content}</p>
    </div>
    <div className='sameline'>
	  <span className="trash" onClick={()=> dispatch(removeNote(index))}>
    	<span></span>
    	<i></i>
    </span>
    </div><br></br>
    <div className='sameline' onClick={()=>{
      setEditingIndex(index);
      setEditingTitle(note.title);
      setEditingContent(note.content);}
    }>
    <FontAwesomeIcon icon={faPenToSquare} className='font-icon'></FontAwesomeIcon>
    </div>


      </article>
      </> )}</>
          );
  })}
  </>
  );
  }
