export interface Book {
  id: string;
  title: string;
  author: Author;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  books: Book[];
}
