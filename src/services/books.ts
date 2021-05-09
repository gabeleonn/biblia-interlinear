export type BooksObject = {
  longName: string;
  order: number;
  shortName: string;
  chapters: number[];
};

type BooksArray = [string, number, string, number][];

const books: BooksArray = [
  ['Gênesis', 1, 'gn', 50],
  ['Êxodo', 2, 'ex', 40],
  ['Levítico', 3, 'lv', 27],
  ['Números', 4, 'nm', 36],
  ['Deuteronômio', 5, 'dt', 34],
  ['Josué', 6, 'js', 24],
  ['Juízes', 7, 'jz', 21],
  ['Rute', 8, 'rt', 4],
  ['1 Samuel', 9, '1sm', 31],
  ['2 Samuel', 10, '2sm', 24],
  ['1 Reis', 11, '1rs', 22],
  ['2 Reis', 12, '2rs', 25],
  ['1 Crônicas', 13, '1cr', 29],
  ['2 Crônicas', 14, '2cr', 36],
  ['Esdras', 15, 'ed', 10],
  ['Neemias', 16, 'ne', 13],
  ['Ester', 17, 'et', 10],
  ['Jó', 18, 'jo', 42],
  ['Salmos', 19, 'sl', 150],
  ['Provérbios', 20, 'pv', 31],
  ['Eclesiastes', 21, 'ec', 12],
  ['Cantares', 22, 'ct', 8],
  ['Isaías', 23, 'is', 66],
  ['Jeremias', 24, 'jr', 52],
  ['Lamentações', 25, 'lm', 5],
  ['Ezequiel', 26, 'ez', 48],
  ['Daniel', 27, 'dn', 12],
  ['Oseias', 28, 'os', 14],
  ['Joel', 29, 'jl', 3],
  ['Amós', 30, 'am', 9],
  ['Obadias', 31, 'ob', 1],
  ['Jonas', 32, 'jn', 4],
  ['Miqueias', 33, 'mq', 7],
  ['Naum', 34, 'na', 3],
  ['Habacuque', 35, 'hc', 3],
  ['Sofonias', 36, 'sf', 3],
  ['Ageu', 37, 'ag', 2],
  ['Zacarias', 38, 'zc', 14],
  ['Malaquias', 39, 'ml', 4],
  ['Mateus', 40, 'mt', 28],
  ['Marcos', 41, 'mc', 16],
  ['Lucas', 42, 'lc', 24],
  ['João', 43, 'jo', 21],
  ['Atos dos Apóstolos', 44, 'at', 28],
  ['Romanos', 45, 'rm', 16],
  ['1 Coríntios', 46, '1co', 16],
  ['2 Coríntios', 47, '2co', 13],
  ['Gálatas', 48, 'gl', 6],
  ['Efésios', 49, 'ef', 6],
  ['Filipenses', 50, 'fp', 4],
  ['Colossenses', 51, 'cl', 4],
  ['1 Tessalonicenses', 52, '1ts', 5],
  ['2 Tessalonicenses', 53, '2ts', 3],
  ['1 Timóteo', 54, '1tm', 6],
  ['2 Timóteo', 55, '2tm', 4],
  ['Tito', 56, 'tt', 3],
  ['Filemom', 57, 'fm', 1],
  ['Hebreus', 58, 'hb', 13],
  ['Tiago', 59, 'tg', 5],
  ['1 Pedro', 60, '1pe', 5],
  ['2 Pedro', 61, '2pe', 3],
  ['1 João', 62, '1jo', 3],
  ['2 João', 63, '2jo', 1],
  ['3 João', 64, '3jo', 1],
  ['Judas', 65, 'jd', 1],
  ['Apocalipse', 66, 'ap', 22],
];

function range(start: number, stop: number, step: number): number[] {
  if (start === 0 && stop === 0) {
    return [];
  }
  const result = [];
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }
  return result;
}

const result = books.map(book => ({
  longName: book[0],
  shortName: book[2],
  chapters: range(1, book[3] + 1, 1),
  order: book[1],
}));

export default function getBookInfo(book: string): BooksObject {
  return result.filter(b => b.shortName === book)[0];
}

export function getBooks(): BooksObject[] {
  return result;
}
