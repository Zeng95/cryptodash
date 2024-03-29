import React from 'react';
import useCoins from 'hooks/useCoins';

// Create a Context object
const SettingsContext = React.createContext();

function SettingsContextProvider(props) {
  const coins = useCoins();

  return (
    <SettingsContext.Provider value={{ ...coins }}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export { SettingsContext, SettingsContextProvider };
