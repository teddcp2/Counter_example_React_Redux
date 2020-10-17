import {combineReducers} from 'redux';

const valueReducer = (value= 0, action) => {
  // console.log('Reducer called, ', value)
  switch(action.type){
    case 'INCREMENT' :
      return  value + 1;
    
    case 'DECREMENT' :
        return  value - 1;
       
    default :
      return  value;
  }
}

export default combineReducers({
  value: valueReducer
});

// export default rootReducer;