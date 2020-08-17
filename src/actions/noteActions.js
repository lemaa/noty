
import {FETCH_NOTES, CREATE_NOTE, DELETE_NOTE } from './types';
import axios from 'axios';

const apiUrl = 'http://192.168.99.104:9090/note';

const createNote = (body) => {
  return async (dispatch) => {
    try
      {
        const response = await axios.post(`${ apiUrl }/create`, body);
        dispatch(createNoteSuccess(response.data));
      }
      catch (error)
      {
          throw (error);
      }
  };
};

const createNoteSuccess =  (data) => {
  return {
    type: CREATE_NOTE,
    payload: {
      _id: data.note._id,
      body: data.note
    }
  };
};

const deleteNoteSuccess = data => {
  return {
    type: DELETE_NOTE,
    payload: {
      id: data.note._id
    }
  };
};

const deleteNote = id => {
  return async (dispatch) => {
    try
      {
          const response = await axios.delete(`${ apiUrl }/delete/${ id }`);
          dispatch(deleteNoteSuccess(response.data));
      }
      catch (error)
      {
          throw (error);
      }
  };
};

const fetchNotes = (notes) => {
   return {
    type: FETCH_NOTES,
    notes: notes 
    
  };
};

const fetchAllNotes = () => {
  return async (dispatch) => {
    try
      {  
          const response = await axios.get(`${ apiUrl }/notes`);
          dispatch(fetchNotes(response.data));
      }
      catch (error)
      {
          throw (error);
      }
  };
};


export default {
    createNote,
    createNoteSuccess,
    deleteNoteSuccess,
    deleteNote,
    fetchNotes,
    fetchAllNotes
};
