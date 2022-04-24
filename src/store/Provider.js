import Context from './Context'
import React, { useReducer } from 'react'
import reducer, { initState } from './reducer'

function Provider({children}) {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export default Provider