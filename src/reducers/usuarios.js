const defaultState = [
  {
    nombre: 'Leo'
  },
  {
    nombre: 'Juan'
  }
]

function reducer(state = defaultState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default reducer;