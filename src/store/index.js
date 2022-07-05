import { createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';

export const addNote = (payload) => {
  return {
    type: 'notes/add',
    payload: {
      id: uuidv4(),
      ...payload,
    },
  };
};

export const removeNote = (payload) => {
  return {
    type: 'notes/remove',
    payload,
  };
};

const initialState = {
  notes: [
    {
      id: uuidv4(),
      title: 'lorem ipsum',
      content: 'lorem ipsum dolor sit amet',
    },
  ],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'notes/add':
      return { ...state, notes: [...state.notes, action.payload] };
    case 'notes/remove':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const store = createStore(notesReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
