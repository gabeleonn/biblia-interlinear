import { ChapterData } from '../context/useChapter';

export interface ILink {
  link: string;
  ariaLabel: string;
  text: string | number;
}

export interface IChapterPage {
  data: ChapterData;
}
