import React, { useContext, createContext, useState } from 'react';

export type Word = {
  word: string;
  strongs: string[];
};

export type Verse = {
  verse: number;
  text: Word[];
};

export type Chapter = {
  data: {
    version: string;
    shortVersion: string;
    copyright: string;
    book: string;
    bookLink: string;
    chapter: number;
    chapters: number;
    verses: Verse[];
  };
};

type ChapterContextProps = {
  data: Chapter;
  getData(book: string, chapter: string): Promise<void>;
};

const ChapterContext = createContext<ChapterContextProps>(
  {} as ChapterContextProps,
);

const ChapterProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Chapter>();

  const getData = async (book: string, chapter: string): Promise<void> => {
    const res = await fetch(`http://localhost:8000/ara/${book}/${chapter}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <ChapterContext.Provider value={{ data, getData }}>
      {children}
    </ChapterContext.Provider>
  );
};

export const useChapter = (): ChapterContextProps => {
  const context = useContext(ChapterContext);
  if (!context) {
    throw new Error(
      'useChapter precisa ser usado dentro de um ChapterContext.Provider',
    );
  }

  return context;
};

export default ChapterProvider;
