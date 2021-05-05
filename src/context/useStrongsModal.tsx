import React, { useContext, createContext, useState } from 'react';
import StrongModal from '../components/molecules/StrongModal';

type StrongsModalProps = {
  toggleModal(strongsArray: string[]): void;
  isOpened: boolean;
};

const StrongsModal = createContext<StrongsModalProps>({} as StrongsModalProps);

const StrongProvider: React.FC = ({ children }) => {
  const [strongs, setStrongs] = useState<string[]>();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const toggleModal = (strongsArray: string[] = []): void => {
    if (strongsArray.length >= 1) {
      setStrongs(strongsArray);
    }
    setIsOpened(state => !state);
  };

  return (
    <StrongsModal.Provider value={{ toggleModal, isOpened }}>
      {children}
      <StrongModal strongs={strongs} />
    </StrongsModal.Provider>
  );
};

export const useStrongModal = (): StrongsModalProps => {
  const context = useContext(StrongsModal);
  if (!context) {
    throw new Error(
      'useChapter precisa ser usado dentro de um StrongsModal.Provider',
    );
  }

  return context;
};

export default StrongProvider;
