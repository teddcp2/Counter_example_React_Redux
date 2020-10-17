const increment = () => {
  // console.log('incremnt called');
  return {
    type: 'INCREMENT',
    payload:{}
  }
}

const decrement = () => {
  // console.log('decremnt called');
  return {
    type: 'DECREMENT',
    payload:{}
  }
}

export {increment, decrement} ;