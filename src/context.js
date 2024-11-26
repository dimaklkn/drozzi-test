import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState(null);
  const [title, setTitle] = useState(null);
  const [feedback, setFeedback] = useState(null);

  return (
    <AppContext.Provider
      value={{
        photo,
        setPhoto,
        name,
        setName,
        feedback,
        setFeedback,
        title,
        setTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
