import React, { useContext, createContext, useState, useCallback } from 'react';

type StrongsModalProps = {
  setStrongs(strongsArray: string[]): void;
  strongs: string[];
};

const StrongsModal = createContext<StrongsModalProps>({} as StrongsModalProps);

const StrongProvider: React.FC = ({ children }) => {
  const [strongs, setData] = useState<string[]>();

  const setStrongs = useCallback(
    (strongsArray: string[]): void => {
      if (strongsArray.length >= 1) {
        setData(strongsArray);
      }
    },
    [setData],
  );

  return (
    <StrongsModal.Provider value={{ setStrongs, strongs }}>
      {children}
    </StrongsModal.Provider>
  );
};

export const useStrongs = (): StrongsModalProps => {
  const context = useContext(StrongsModal);
  if (!context) {
    throw new Error(
      'useChapter precisa ser usado dentro de um StrongsModal.Provider',
    );
  }

  return context;
};

export default StrongProvider;
