import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
// const [currentUser, setCurrentUser] = useState("");

const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('users')) || []
  );

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
}, [users]);

//   useEffect(() => {
//       const user = localStorage.getItem('user')
//       setCurrentUser(user)
//       console.log(currentUser)
// }, [currentUser])

  return (
    <AuthContext.Provider value={{ users, setUsers  }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
