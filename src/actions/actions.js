import axios from 'axios';
import { __DO_NOT_USE__ActionTypes } from 'redux';
export const CHECK_DUPLICATE = 'CHECK_DUPLICATE';
export const ADD_RECORD = 'ADD_RECORD';
export const SET_ERROR = 'SET_ERROR';
export const INCREMENT_RECORD_COUNT = 'INCREMENT_RECORD_COUNT';
export const FETCH_RECORD_COUNT = 'FETCH_RECORD_COUNT';


// Action Creators

export const checkDuplicateAndSubmit = (empData) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:4000/empdatabase?email=${empData.email}`)
      .then((response) => {
        if (response.data.length > 0) {
          const errorMessage = 'errorMessage';
          // Duplicate found, dispatch an error action and reject the promise
          dispatch({ type: 'SET_ERROR', payload: 'User already exists' });
          return Promise.reject('User already exists');
        } else {
          // No duplicate, proceed with adding the record
          return axios.post("http://localhost:4000/empdatabase", empData).then((res) => {
            dispatch({ type: 'ADD_RECORD', payload: empData });
            dispatch({ type: 'INCREMENT_ON_SUCCESS' }); // Increment count
            dispatch({ type: 'SET_ERROR', payload: '' }); // Clear any previous errors
            return Promise.resolve(); // Resolve the promise
          });
        }
      })
      .catch((error) => {
        const errorMessage = 'User Already Exist';
        dispatch({ type: 'SET_ERROR',  payload: errorMessage });
        return Promise.reject(error.message); // Reject the promise with an error
      });
  };
};

export const fetchRecordCount = ()=>async (dispatch)=>{
  try{
    const response = await axios.get('http://localhost:4000/empdatabase');
    dispatch({type: FETCH_RECORD_COUNT, payload: response.data.length});
  }catch(error){
    dispatch({type: SET_ERROR,payload: error.message});

  }
}

export const updateRecord = (empData, paramId) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:4000/empdatabase/${paramId}`, empData)
      .then((res) => {
        dispatch({ type: 'UPDATE_RECORD', payload: empData });
        dispatch({ type: 'SET_ERROR', payload: '' }); // Clear any previous errors
        return Promise.resolve();
      })
      .catch((error) => {
        const errorMessage = 'Erro while updating';
        dispatch({ type: 'SET_ERROR', payload: errorMessage });
        return Promise.reject(errorMessage); // Reject the promise with a proper error message
      });
  };
};
export function resetError(){
  console.log("Resetting error")
  return {
    type: 'SET_ERROR', payload: '' 
  }
}
export function increment(step){
    return {
      type:"INCREMENT",
      step
    }
  }
  export function decrement(step){
    return {
      type:"DECREMENT",
      step
    }
  }
