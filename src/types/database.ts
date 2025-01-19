export interface User {
  id: string;
  name: string;
  email: string;
  synopses: Synopsis[];
}

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

export interface Synopsis {
  id: string;
  content: string;
  book: Book;
  user: User;
  created_at: string;
}
