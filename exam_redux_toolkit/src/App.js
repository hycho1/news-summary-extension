import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {createStore} from 'redux';

function reducer(state, action){  
  if(action.type === 'up'){
    return {...state, value:state.value + action.step}  
  }
  return state;
}

const initialState = {value:0}
const store = createStore(reducer, initialState);

function Counter(){
  const dispatch = useDispatch();
  const count = useSelector(state => state.value);
  return (
  <div>
    <button onClick={()=>{
        dispatch({type:'up', step:2});
      }}>+
    </button>{count}
  </div>
  )
}

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Counter></Counter>
    </div>
    </Provider>
  );
}

export default App;
