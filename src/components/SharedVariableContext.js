// SharedVariableContext.js
import React, { createContext, useContext, useState } from 'react';

const SharedVariableContext = createContext();

export function SharedVariableProvider({ children }) {
  const [sharedVariable, setSharedVariable] = useState(0);

  const updateSharedVariable = () => {
    // Modify the shared variable by adding 25 to the current value
    setSharedVariable((prevValue) => prevValue + 50);
  };

  return (
    <SharedVariableContext.Provider value={{ sharedVariable, updateSharedVariable }}>
      {children}
    </SharedVariableContext.Provider>
  );
}

export function useSharedVariable() {
  return useContext(SharedVariableContext);
}
