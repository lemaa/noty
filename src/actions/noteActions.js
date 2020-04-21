
import {FETCH_NOTES, CREATE_NOTE, DELETE_NOTE } from './types';
import axios from 'axios';
import Utils from './../utils';

const apiUrl = 'http://localhost:3000/note';

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
      _id: data._id,
      body: data.body
    }
  };
};

const deleteNoteSuccess = id => {
  return {
    type: DELETE_NOTE,
    payload: {
      id
    }
  };
};

const deleteNote = id => {
  return async (dispatch) => {
    try
      {
          const response = await axios.get(`${ apiUrl }/delete/${ id }`);
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
    notes: Utils.arrayTools.chunkArray(notes, 3)
    
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
