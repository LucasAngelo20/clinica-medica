import React, { createContext, useState } from "react";

export const SignedContext = createContext();

export const SignedProvider = ({ children }) => {
  const [isSigned, setIsSigned] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState('')

  return (
    <SignedContext.Provider value={{ isSigned, setIsSigned, admin, setAdmin, user, setUser }}>
      {children}
    </SignedContext.Provider>
  );
};
