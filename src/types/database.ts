export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email_address: string;
  synopses: Synopsis[];
}

export interface Book {
  id: string;
  title: string;
  author: Author;
  current_synopsis: Synopsis;
  synopses: Synopsis[];
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
