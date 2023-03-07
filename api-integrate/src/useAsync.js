import React, {useCallback, useEffect, useReducer} from 'react';
import {reducer} from './Reducer.js';
import axios from "axios";

const UseAsync = (callback, deps = [], skip = false) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null
  })
  
  const fetchData = useCallback(async () => {
    dispatch({type: 'LOADING'});
    try {
      const data = await callback();
      dispatch({type: 'SUCCESS', data});
    } catch (e) {
      dispatch({type: 'ERROR', error: e});
    }
  });
  
  useEffect(() => {
    if (skip) {
      return;
    }
    fetchData();
  }, deps);
  
  return [state, fetchData]
};

export default UseAsync;