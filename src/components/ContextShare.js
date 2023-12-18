import React, { createContext, useState } from "react";

//hook to create context createContext

// create context  before function
export const registerContext = createContext();

// update context
export const updateContext = createContext();

function ContextShare({ children }) {
  //create state for register context
  const [registerUpdate, setRegisterUpdate] = useState("");


//state to updateContext
  const [updateStatus, setUpdateStatus] = useState("");

  return (
    <div>
      <updateContext.Provider value={{updateStatus,setUpdateStatus}}>
        <registerContext.Provider value={{ registerUpdate, setRegisterUpdate }}>
          {children}
        </registerContext.Provider>
      </updateContext.Provider>
    </div>
  );
}

export default ContextShare;
