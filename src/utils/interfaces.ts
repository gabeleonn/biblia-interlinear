export interface ILink {
  link: string;
  ariaLabel: string;
  text: string | number;
  isExternal?: boolean;
}

export interface IChapterPage {
  data: ChapterData;
}

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
    shortName: string;
    bookLink: string;
    chapter: number;
    chapters: number;
    verses: Verse[];
  };
};

export type ChapterData = {
  version: string;
  shortVersion: string;
  copyright: string;
  book: string;
  shortName: string;
  bookLink: string;
  chapter: number;
  chapters: number;
  verses: Verse[];
};
