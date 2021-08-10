import React, {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

type StrongsModalProps = {
  setStrongs(strongsArray: string[]): Promise<void>;
  info: Strong;
};

type Strong = {
  definition: string;
};

const StrongsModal = createContext<StrongsModalProps>({} as StrongsModalProps);

const StrongProvider: React.FC = ({ children }) => {
  const [strongs, setData] = useState<string[]>();
  const [info, setInfo] = useState<Strong>();

  useEffect(() => {
    const getInfo = async (): Promise<void> => {
      if (strongs) {
        const res = await fetch(
          `https://biblia-online-api.azurewebsites.net/strong/${strongs[0]}`,
        );
        const data = await res.json();
        setInfo(data);
      }
    };

    getInfo();
  }, [strongs]);

  const setStrongs = useCallback(
    async (strongsArray: string[]): Promise<void> => {
      if (strongsArray.length >= 1) {
        setData(strongsArray);
      }
    },
    [setData],
  );

  return (
    <StrongsModal.Provider value={{ setStrongs, info }}>
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
